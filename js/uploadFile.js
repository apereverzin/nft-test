const pinataApiKey = "20fe91060e9fbe7249d4";
const pinataSecretApiKey = "f38af18abf327e56907eb5b5cff8a8771a23c54e5c9c748001d4b4e480362b89";
const axios = require("axios");
const fs = require("fs");
const FormData = require("form-data");
const pinFileToIPFS = async () => {
  const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
  let data = new FormData();
  data.append("file", fs.createReadStream("/Users/mac/Downloads/InvestmentBankDiagram.jpeg"));
  const res = await axios.post(url, data, {
    maxContentLength: "Infinity",
    headers: {
      "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
      pinata_api_key: pinataApiKey,
      pinata_secret_api_key: pinataSecretApiKey
    },
  });
  console.log(res.data);
};

pinFileToIPFS();

/*
{
  IpfsHash: 'QmdQ2MvUGqPYTVnDf8nfCTG9wJnhnX6gp1UuThAPTzeaR8',
  PinSize: 95333,
  Timestamp: '2021-04-25T11:29:04.559Z'
}
*/
