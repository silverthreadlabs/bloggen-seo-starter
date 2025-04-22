import { ImageResponse } from '@vercel/og'

export function GET(request: Request) {
  const url = new URL(request.url)
  const title = url.searchParams.get('title') || 'Silverthread Labs'
  
  return new ImageResponse(
    (
      <div 
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
          background: 'linear-gradient(135deg, #000000, #1a1a1a, #262626)',
        }}
      >
        {/* Subtle thread line */}
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(192,192,192,0.2), transparent)',
            top: '50%',
          }}
        />

        <div 
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            padding: '48px 32px',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            zIndex: 10,
          }}
        >
          <h1 
            style={{
              display: 'flex',
              flexDirection: 'column',
              fontSize: '84px',
              fontWeight: 700,
              textAlign: 'center',
              color: 'white',
              letterSpacing: '-2px',
              margin: 0,
              padding: 0,
            }}
          >
            {title}
          </h1>
        </div>

        {/* Optional: Bottom accent line */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            width: '200px',
            height: '2px',
            background: 'linear-gradient(90deg, transparent, rgba(192,192,192,0.3), transparent)',
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}