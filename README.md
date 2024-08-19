Subgraph code : https://github.com/sigmac779/Status/tree/main/getfarm
  


## Contract Info ->  The  smart contract  is deployed on scroll sepolia



Contract Address: 0x980C3fFb37CD7C92E3CebbE1BB69Bc5E3dCa0419

https://sepolia.scrollscan.com/address/0x980C3fFb37CD7C92E3CebbE1BB69Bc5E3dCa0419



## Graph integeration Fracster  Frames 




### Graph Query 

```
  const query = `
  {
    donations(first: 10, orderBy: id) {
      from
      id
      message
      name
      timestamp
    }
  }
  `;
```

The query code used in the Frame can be found here:  https://github.com/sigmac779/Status/blob/main/Frame/api/index.tsx#L100

## The Graph Integration in Frontend Dapp


I created subgraph for this prroject and query  to make various dashboard like  Marketplace, Dashboard, Experience cebtre

### Here's the Link of the subgraph-> https://thegraph.com/studio/subgraph/getfarm/playground



# Graph query 

###  The code for Montezing the content  is in: https://github.com/sigmac779/Status/blob/main/Frontend/src/pages/marketplace.js#L32

###  The code for sharing experience can be found here : https://github.com/sigmac779/Status/blob/main/Frontend/src/components/Memos.jsx#L16

