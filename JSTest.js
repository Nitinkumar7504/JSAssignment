// Step 1: Create a variable to hold your NFTs
let nftCollection = [];

// Step 2: This function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, artist, year, description) {
  const nft = {
    name: name,
    artist: artist,
    year: year,
    description: description
  };
  nftCollection.push(nft);
}

// Step 3: Create a "loop" that will go through an "array" of NFTs
// and print their metadata with console.log()
function listNFTs() {
  nftCollection.forEach((nft, index) => {
    console.log(`NFT #${index + 1}`);
    console.log(`Name: ${nft.name}`);
    console.log(`Artist: ${nft.artist}`);
    console.log(`Year: ${nft.year}`);
    console.log(`Description: ${nft.description}`);
    console.log('---------------------');
  });
}

// Step 4: Print the total number of NFTs we have minted to the console
function getTotalSupply() {
  return nftCollection.length;
}

// Call your functions below this line

// Minting some NFTs
mintNFT("CryptoPunk", "Larva Labs", 2017, "One of the first NFT projects.");
mintNFT("Bored Ape", "Yuga Labs", 2021, "A popular collection of unique apes.");
mintNFT("Art Blocks", "Art Blocks", 2020, "Generative art on the blockchain.");

// Listing all NFTs
listNFTs();

// Printing the total supply of NFTs
console.log(`Total NFTs minted: ${getTotalSupply()}`);
