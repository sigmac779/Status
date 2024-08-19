// Endpoint for  olx Subgraph endpoints:
// Queries (HTTP):     https://api.studio.thegraph.com/query/54911/olx-marketplac/v0.0.1

import { useState, useEffect } from "react";
import { createClient } from "urql";

const AnalysisReport = ({ state }) => {
  const [tokens, setTokens] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  const QueryURL = "https://api.studio.thegraph.com/query/67475/getfarm/v0.0.1";

  const query = `
    {
      updateDatas {
        buyer
        func
        timestamp
        txn
      }
    }
  `;

  const client = createClient({
    url: QueryURL
  });

  useEffect(() => {
    if (!client) {
      return;
    }

    const getTokens = async () => {
      try {
        const { data } = await client.query(query).toPromise();
        setTokens(data.updateDatas);
        console.log(data.updateDatas);
        setIsLoading(false); // Data is loaded
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getTokens();
  }, [client]);

  return (
    <>
      <p className=" mncnt " >
        History
      </p>
      {isLoading ? (
        // Show loading indicator while data is being fetched
        <div>Loading...</div>
      ) : tokens.length > 0 ? (
        tokens.map((token) => (
          <div className="mt-4 pt-1 pr-14 " key={token.id}>
            <div className="container-fluid" style={{ width: "100%" }}>
              <table
                className="tb"
                style={{
                  marginBottom: "10px",
                }}
                responsive={true}
              >
                <tbody>
                  <tr className="tr">
                    <td
                      style={{
                        backgroundColor: "white",
                        border: "1px solid white",
                        borderCollapse: "collapse",
                        padding: "7px",
                        width: "100px",
                      }}
                    >
                      {token.func}
                    </td>
                    <td
                      style={{
                        backgroundColor: "white",
                        border: "1px solid white",
                        borderCollapse: "collapse",
                        padding: "7px",
                        width: "800px",
                      }}
                    >
                      {new Date(token.timestamp * 1000).toLocaleString()}
                    </td>
                    <td
                      style={{
                        backgroundColor: "white",
                        border: "1px solid white",
                        borderCollapse: "collapse",
                        padding: "7px",
                        width: "300px",
                      }}
                    >
                      {token.buyer}
                    </td>
                    <td
                      style={{
                        backgroundColor: "white",
                        border: "1px solid white",
                        borderCollapse: "collapse",
                        padding: "7px",
                        width: "400px",
                      }}
                    >
                      {token.txn}
                    </td>
                    <td
                      style={{
                        backgroundColor: "#96D4D4",
                        border: "1px solid white",
                        borderCollapse: "collapse",
                        padding: "7px",
                        width: "400px",
                      }}
                    >
                      {1}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ))
      ) : (
        <div>No data available</div>
      )}
    </>
  );
};

export default AnalysisReport;