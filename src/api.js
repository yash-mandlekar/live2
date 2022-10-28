export const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiJmMTViNjdjZi05NzlhLTQ2OWMtODllZi1iNjdjZmE1N2NkMTEiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTY2Njg1NjcwMSwiZXhwIjoxNjY3NDYxNTAxfQ.Vq85DjRSNHkBrSNq7adu1I4a1WI7CWvbLzt--UYisz8";

// API call to create meeting
export const createMeeting = async () => {
  const res = await fetch(`https://api.videosdk.live/v1/meetings`, {
    method: "POST",
    headers: {
      authorization: `${authToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ region: "sg001" }),
  });

  const { meetingId } = await res.json();
  return meetingId;
};

// API call to fetch latest downstream url for a meeting session
export const fetchHlsDownstreamUrl = async ({ meetingId }) => {
  const res = await fetch(
    `https://api.videosdk.live/v2/hls/?roomId=${meetingId}`,
    {
      method: "GET",
      headers: {
        authorization: `${authToken}`,
        "Content-Type": "application/json",
      },
    }
  );

  const json = await res.json();

  const { downstreamUrl } = json?.data[0];

  return downstreamUrl;
};
