# Music Sequencer

A web-based music sequencer application that allows users to create, play, and save musical patterns using different instrument channels.

## Features

- **Multiple Instrument Channels**: Switch between Piano (🎹), Guitar (🎸), and Darbuka (🪘)
- **Visual Grid Sequencer**: Interactive grid interface for creating musical patterns
- **Playback Controls**: Play, pause, stop, and control playback speed
- **Dynamic Columns**: Add or remove columns (up to 100) for longer sequences
- **Volume Control**: Adjustable volume with real-time feedback
- **Save & Load**: Save your musical creations and load them later
- **Cloud Storage**: All music patterns and audio files stored in AWS S3
- **Local Caching**: Instrument channels cached locally for 1 hour to improve performance

## Tech Stack

### Frontend
- **React 18** with TypeScript
- **React Router** for navigation
- **Tone.js** for audio playback and synthesis
- **Vite** as build tool
- Context API for state management

### Backend
- **Express.js** (v5.1.0)
- **AWS SDK v3** for S3 integration
- **CORS** enabled for cross-origin requests
- **dotenv** for environment configuration

### Storage
- **AWS S3** for audio file storage and user-created patterns
- Pre-signed URLs for secure audio access (1-hour expiration)
- LocalStorage for client-side caching

## Project Structure

```
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── AudioSquare.tsx       # Individual grid cell component
│   │   │   ├── Music.tsx             # Saved music item display
│   │   │   ├── buttons/              # Control buttons
│   │   │   │   ├── AddColumn.tsx
│   │   │   │   ├── Channels.tsx
│   │   │   │   ├── ControlSpeed.tsx
│   │   │   │   ├── Play.tsx
│   │   │   │   ├── Restart.tsx
│   │   │   │   ├── SaveState.tsx
│   │   │   │   ├── Stop.tsx
│   │   │   │   └── Volume.tsx
│   │   │   └── layout/
│   │   │       ├── GridMusic.tsx     # Main sequencer grid
│   │   │       ├── InlineHeader.tsx
│   │   │       └── NavBar.tsx
│   │   ├── context/
│   │   │   └── MyContext.context.tsx # Global state management
│   │   ├── pages/
│   │   │   ├── HomePage.tsx
│   │   │   └── MusicSaves.tsx
│   │   ├── utils/
│   │   │   ├── getAllMusicSaved.ts
│   │   │   ├── getChanFromLocal.ts   # LocalStorage helpers
│   │   │   ├── getChannelFromServer.ts
│   │   │   ├── parseFileKey.ts
│   │   │   ├── playColumn.ts
│   │   │   ├── saveState.ts
│   │   │   ├── setColorAfter.ts
│   │   │   └── handles/
│   │   │       └── channels.ts
│   │   └── style/                     # CSS files
│   └── App.tsx
│
└── server/
    ├── db/
    │   └── connectToS3.js            # AWS S3 integration
    ├── routes/
    │   ├── get.js                    # GET endpoints
    │   └── post.js                   # POST endpoints
    └── index.js                      # Server entry point
```

## API Endpoints

### GET Routes

#### `/music/channel/:channame`
Fetches audio files for a specific instrument channel from S3.
- **Parameters**: `channame` (piano, guitar, or darbuka)
- **Returns**: JSON with pre-signed URLs for audio files
- **Caching**: Results cached in browser localStorage for 1 hour

#### `/music/musicsaves`
Retrieves all saved music patterns.
- **Returns**: Array of saved music objects with grid state and metadata

### POST Routes

#### `/create/saveState/:nameFile`
Saves a music pattern to S3.
- **Parameters**: `nameFile` - Name for the saved pattern
- **Body**: JSON containing `channel` and `matrix` (grid state)
- **Returns**: Success message

## Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- AWS Account with S3 bucket configured
- AWS credentials with S3 read/write permissions

### Environment Variables

Create a `.env` file in the `server/` directory:

```env
PORT=3005
ENDPOINTS3=your_s3_endpoint
AceesKeyId=your_aws_access_key
SecretKey=your_aws_secret_key
```

### Installation

1. **Install server dependencies:**
```bash
cd server
npm install
```

2. **Install client dependencies:**
```bash
cd client
npm install
```

### Running the Application

1. **Start the backend server:**
```bash
cd server
npm run dev
```
Server runs on `http://localhost:3005`

2. **Start the frontend development server:**
```bash
cd client
npm run dev
```
Client typically runs on `http://localhost:5173`

## How to Use

1. **Select an Instrument**: Click the channel button (🎹/🎸/🪘) to switch between instruments
2. **Create Pattern**: Click grid cells to toggle notes on/off (white = active, gradient = inactive)
3. **Adjust Grid**: Use +/- buttons to add or remove columns
4. **Control Playback**:
   - ▶ to play
   - ⏸ to pause
   - ⏹ to stop and reset
   - Adjust speed with the slider (x0.5 to x5)
5. **Save Pattern**: Click "Save", enter a name, and submit
6. **Load Pattern**: Navigate to "MUSIC SAVE" to see and load saved patterns

## Key Features Explained

### Grid System
- Each column represents a time step in the sequence
- Each row represents a different note/sound in the instrument
- The bottom row (🥁) is specially highlighted
- Active column during playback shows reduced opacity

### Playback System
- Uses Tone.js for audio synthesis and playback
- Loops continuously when playing
- Supports speed adjustment from 0.5x to 5x
- Volume control affects all audio output

### State Management
- React Context API manages global state
- Includes: grid state, playback controls, selected instrument, volume, etc.
- State persists during navigation between pages

### Caching Strategy
- Instrument audio URLs cached in localStorage for 1 hour
- Reduces server requests and improves load times
- Cache automatically invalidated after expiration

## S3 Bucket Structure

```
music/
├── piano/               # Piano audio files
├── guitar/              # Guitar audio files
├── darbuka/             # Darbuka audio files
└── createMusic/         # User-saved patterns
    └── [filename][timestamp].json
```

## Performance Optimizations

- LocalStorage caching for instrument channels (1-hour TTL)
- Pre-signed URLs with 1-hour expiration
- Lazy loading of saved music patterns
- Debounced audio playback
- Efficient grid state updates using functional setState

## Browser Compatibility

- Modern browsers with Web Audio API support
- Chrome, Firefox, Safari, Edge (latest versions)
- Mobile browsers supported

## Known Limitations

- Maximum 100 columns per sequence
- Minimum 10 columns per sequence
- Audio files must be hosted on S3
- Requires stable internet connection for audio streaming

## Future Enhancements

- [ ] Add more instrument channels
- [ ] Support custom audio file uploads
- [ ] Export patterns as MIDI or audio files
- [ ] Collaborative editing features
- [ ] Mobile-optimized UI
- [ ] Pattern sharing via links
- [ ] Tempo/BPM indicator
- [ ] Undo/Redo functionality

## License

ISC

## Authors

Created with React, Express, and Tone.js
