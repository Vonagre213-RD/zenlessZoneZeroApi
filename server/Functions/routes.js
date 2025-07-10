import { createClient } from "@supabase/supabase-js";
import dotenv from 'dotenv'
dotenv.config()

const supabase = createClient(
    process.env.DATABASEURL,
    process.env.SUPABASEKEY,
)
const getRows = async (field, query) => {

    const fields = ["name", "attribute", "faction", "id", "all", "images"]

    if (!fields.includes(field)) return console.log(`campo ${field} no existe`)

    if (field !== "all") {
        let { data, error } = await supabase
            .from('agents')
            .select('*')
            .ilike(field, `%${query}%`)
        return !error ? data : console.log(error)
    }
    else{
        let { data, error } = await supabase
            .from('agents')
            .select('*')
        return !error ? data : console.log(error)
    }
  
}
const validateResponse = (res) => {
    if (!res || res.length == 0) {
        res = { Message: "couldn't find character, check the written name again" }
    }

    return res
}

const Router = async (app) => {
    //all routes
    await app.get('/characters/agents/All', async (req, res) => {
        let response = await getRows("all")

        res.status(200).json(response)
    })
    //base Searchs
    await app.get('/characters/agents/name/:name', async (req, res) => {
        const { name } = req.params
        const response = await getRows('name', name)

        const data = validateResponse(response)

        res.status(200).json(data)
    })
    await app.get('/characters/agents/Attribute/:attributeName', async (req, res) => {
        const { attributeName } = req.params
        const response = await getRows('attribute', attributeName)

        const data = validateResponse(response)

        res.status(200).json(data)
    })
    await app.get('/characters/agents/faction/:factionName', async (req, res) => {
        const { factionName } = req.params
        const response = await getRows('faction', factionName)

        const data = validateResponse(response)

        res.status(200).json(data)
    })
    await app.get('/characters/agents/id/:agentId', async (req, res) => {
        const { agentId } = req.params
        const response = await getRows(`id`, agentId)

        const data = validateResponse(response)
        
        res.status(200).json(data)
    })
   

    // //Mixed Searchs
    // await app.get('/characters/agents/name/:name/faction/:factionName', async (req, res) => {
    //     const { name, factionName } = req.params
    //     const rows = await getRows(name, factionName)

    //     let response = rows
    //     if (!response || rows.length == 0) {
    //         response = { Message: "couldn't find character, check the written name again" }
    //     }
    //     res.status(200).json(response)
    // })

    // await app.get('/characters/agents/name/:name/Attribute/:attributeName', async (req, res) => {
    //     const { name, attributeName} = req.params
    //     const rows = await getRows(name, null, attributeName)
    //     let response = rows
    //     if (!response || rows.length == 0) {
    //         response = { Message: "couldn't find character, check the written name again" }
    //     }
    //     res.status(200).json(response)
    // })



}

export { Router }