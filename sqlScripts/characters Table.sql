
CREATE TABLE Agents (
    Id VARCHAR(100) UNIQUE NOT NULL PRIMARY KEY,
    Rank VARCHAR(50) Not NULL DEFAULT 'N/A', CHECK(Rank in ('S', 'A', 'N/A')),
    ImagesUrl JSONB Not null,
    Name VARCHAR (100) not NULL DEFAULT 'N/A',
    Gender VARCHAR(100) NOT Null DEFAULT 'N/A',
    Height VARCHAR(50) NOT NULL DEFAULT 'N/A',
    Birthday VARCHAR(50) Not NULL DEFAULT 'N/A',
    Species VARCHAR(50) DEFAULT 'N/A',
    Faction VARCHAR(100) NOT NULL DEFAULT 'N/A',
    Attribute VARCHAR(50) NOT NULL DEFAULT 'N/A', CHECK(Attribute in ('Physical', 'Fire', 'Ice', 'Frost', 'Electric', 'Ether', 'Auric Ink', 'N/A')),
    Specialty VARCHAR(100) NOT NULL DEFAULT 'N/A', CHECK(Specialty in ('Attack', 'Stun', 'Anomaly', 'Defense', 'Support', 'Proxy', 'Rupture', 'N/A')),
    Type VARCHAR(50) NOT NULL DEFAULT 'N/A', CHECK(Type in ('Slash', 'Strike', 'Pierce', 'N/A')),
    ShortDescription TEXT not Null DEFAULT 'N/A'
)   

CHECK (
  ImagesUrl ? 'Portrait'
  And ImagesUrl ? "Avatar"
  And JSONb_typeof(ImagesUrl -> 'Portrait') = 'string'
  and JSONB?JSONb_typeof(ImagesUrl -> 'Avatar') = 'string'
)


SELECT conname
FROM pg_constraint
WHERE conrelid = 'Characters'::regclass
  AND contype = 'c'

  ALTER TABLE characters
  add CONSTRAINT  characters_specialty_check CHECK(Specialty in ('Attack', 'Stun', 'Anomaly', 'Defense', 'Support', 'Proxy', 'Rupture', 'N/A'))

  