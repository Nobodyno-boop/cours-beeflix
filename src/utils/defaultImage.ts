import satori from 'satori'

export const DefaultImage = new Promise((r, er) => {
  fetch('/Poppins-Bold.ttf')
    .then((r) => r.arrayBuffer())
    .then((data) => {
      r(
        satori(
          {
            type: 'div',
            props: {
              style: {
                height: '100%',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              },
              children: {
                type: 'h1',
                props: {
                  children: 'No picture',
                  style: { color: 'rgb(253, 224, 71)', fontSize: 40 },
                },
              },
            },
          } as React.ReactNode,
          {
            width: 300,
            height: 169,
            fonts: [
              {
                name: 'Poppins',
                // Use `fs` (Node.js only) or `fetch` to read the font as Buffer/ArrayBuffer and provide `data` here.
                data: data,
                weight: 400,
                style: 'normal',
              },
            ],
          }
        )
      )
    })
})
