# Music Grid Sequencer 🎵

A web-based music sequencer application that allows users to create rhythmic patterns by toggling audio samples in a grid layout. The app features multiple instrument channels and real-time playback with customizable speed and volume controls.

## Project Overview

This is a full-stack application consisting of:
- **Frontend**: React + TypeScript with Tone.js for audio playback
- **Backend**: Express.js server with AWS S3 integration for audio file storage

---

## 🎯 Features

- **Interactive Grid Interface**: Click squares to toggle audio samples on/off
- **Multiple Instrument Channels**: Switch between Piano 🎹 and Guitar 🎸
- **Playback Controls**: Play, pause, stop, and restart functionality
- **Dynamic Grid Size**: Add or remove columns (5-70 columns)
- **Speed Control**: Adjust playback tempo (100ms - 1000ms per step)
- **Volume Control**: Real-time volume adjustment
- **Visual Feedback**: Active column highlighting during playback

---

## 📊 Architecture Flow Diagram
```
┌─────────────────────────────────────────────────────────────────┐
│                         USER INTERFACE                          │
│                     (React Components)                          │
└────────────────┬────────────────────────────────────────────────┘
                 │
                 ├──► Logo (Header)
                 │
                 ├──► GridMusic (Main Grid)
                 │     │
                 │     └──► AudioSquare Components
                 │           ├─ Toggle State (active/inactive)
                 │           ├─ Color Coding (7 rows)
                 │           └─ Audio Playback (Tone.js)
                 │
                 └──► NavBar (Controls)
                       ├─ Play/Stop Button
                       ├─ Channel Selector (🎹/🎸)
                       ├─ Add/Remove Columns
                       ├─ Restart Button
                       ├─ Speed Slider
                       └─ Volume Slider
                 │
    ┌────────────┴────────────┐
    │                         │
    ▼                         ▼
┌─────────────┐         ┌──────────────┐
│   Context   │         │  Tone.js     │
│   Provider  │         │  Audio       │
│ (State Mgmt)│         │  Engine      │
└──────┬──────┘         └──────────────┘
       │
       │ Fetch Channel Data
       │
       ▼
┌─────────────────────────────────────────┐
│        EXPRESS SERVER                   │
│                                         │
│  GET /channel/:channame                 │
│    │                                    │
│    ├──► Fetch from S3                  │
│    ├──► Generate Signed URLs           │
│    └──► Return Audio URLs              │
│                                         │
└────────────┬────────────────────────────┘
             │
             ▼
    ┌────────────────┐
    │   AWS S3       │
    │   Bucket       │
    │                │
    │  /piano/       │
    │  /guitar/      │
    │  (Audio Files) │
    └────────────────┘
```

---

## 🔄 Detailed Flow Breakdown

### 1. Application Initialization Flow
```
User Opens App
     ↓
App.tsx renders
     ↓
MyContext Provider initializes
     ↓
Initial state setup:
  • addColumn: 5
  • gridState: 5x7 grid (all true)
  • controllSpeed: 500ms
  • channel: 'piano'
  • volume: 0.5
     ↓
useEffect triggers getChannel()
     ↓
Fetch audio URLs from server
     ↓
Server fetches from S3 and generates signed URLs
     ↓
Update state with URLs
     ↓
Grid renders with AudioSquare components
```

### 2. Channel Selection Flow
```
User clicks Channel button
     ↓
channels() utility function
     ↓
Switch channel state:
  piano → guitar (🎹 → 🎸)
  guitar → piano (🎸 → 🎹)
     ↓
useEffect detects namechannel change
     ↓
getChannel() called with new channel
     ↓
Fetch new audio URLs from server
     ↓
Update gridState and URLs
     ↓
Grid re-renders with new sounds
```

### 3. Audio Playback Flow
```
User clicks Play ▶
     ↓
setActive(true)
isPlaying.current = true
column increments (0 → 1)
     ↓
useEffect triggered by column change
     ↓
playSpecificColumn() executes
     ↓
For each row in current column:
  ├─ If gridState[column][row] === false
  │   ├─ Create new Tone.Player
  │   ├─ Load audio URL
  │   ├─ Connect to gain node
  │   └─ Play audio
  │
  └─ Skip if true (toggled off)
     ↓
Wait for controllSpeed duration
     ↓
Increment column
     ↓
Loop back or stop at end
     ↓
User clicks Stop ⏹
     ↓
isPlaying.current = false
setActive(false)
setColumn(-1)
```

### 4. Grid Interaction Flow
```
User clicks AudioSquare
     ↓
AudioSquare.play() triggered
     ↓
Tone.start() initializes audio context
     ↓
Create Tone.Player with audio URL
     ↓
Load audio file
     ↓
If currently active:
  └─ Play sound immediately
     ↓
onToggle() callback
     ↓
Update gridState in parent:
  • Clone grid array
  • Toggle boolean at [column][row]
  • Update state
     ↓
Square color changes:
  • true → original color
  • false → #aad2e5ff (light blue)
```

### 5. Dynamic Column Management Flow
```
User clicks + button
     ↓
Check: addColumn < 70?
     ↓
If yes: setAddColumn(prev + 1)
     ↓
useEffect detects addColumn change
     ↓
Update gridState:
  • If adding: append new column with 7 true values
  • If removing: slice array to new size
     ↓
Grid re-renders with new layout
     ↓
CSS grid adjusts: gridTemplateColumns: repeat(n, 1fr)
```

---

## 🗂️ Project Structure
```
project/
│
├── client/                          # Frontend React app
│   ├── src/
│   │   ├── components/
│   │   │   ├── AudioSquare.tsx      # Individual grid cell
│   │   │   ├── buttons/
│   │   │   │   ├── AddColumn.tsx    # +/- column controls
│   │   │   │   ├── Channels.tsx     # Instrument switcher
│   │   │   │   ├── ControlSpeed.tsx # Tempo slider
│   │   │   │   ├── Play.tsx         # Play/Stop button
│   │   │   │   ├── Restart.tsx      # Reset button
│   │   │   │   ├── Stop.tsx         # Stop button
│   │   │   │   └── Volume.tsx       # Volume slider
│   │   │   └── layout/
│   │   │       ├── GridMusic.tsx    # Main grid container
│   │   │       ├── Logo.tsx         # Header logo
│   │   │       └── NavBar.tsx       # Control panel
│   │   │
│   │   ├── context/
│   │   │   └── MyContext.context.tsx # Global state management
│   │   │
│   │   ├── utils/
│   │   │   ├── getChannel.tsx        # API call to fetch sounds
│   │   │   ├── playColumn.ts         # Playback logic
│   │   │   ├── setColorAfter.ts      # Row color mapping
│   │   │   └── handles/
│   │   │       └── channels.ts       # Channel switching logic
│   │   │
│   │   ├── App.tsx                   # Root component
│   │   ├── main.tsx                  # Entry point
│   │   └── index.css                 # Global styles
│   │
│   └── public/
│       └── logo.png
│
└── server/                           # Backend Express server
    ├── db/
    │   └── connectToS3.js            # S3 connection & URL generation
    │
    ├── routes/
    │   └── get.js                    # API routes
    │
    ├── index.js                      # Server entry point
    ├── package.json
    └── .env                          # Environment variables
```

---

## 🎨 State Management

### Context Provider State
```typescript
{
  addColumn: number              // Number of columns (5-70)
  gridState: boolean[][]         // 2D array of cell states
  urls: string[]                 // Audio file URLs
  isPlaying: RefObject<boolean>  // Playback status
  controllSpeed: number          // Playback tempo (ms)
  column: number                 // Current playing column
  gain: RefObject<Tone.Gain>     // Volume control
  error: boolean                 // Error state
  active: boolean                // Playing status
  namechannel: string            // 'piano' or 'guitar'
  channel: string                // '🎹' or '🎸'
}
```

---

## 🎵 Audio System

### Tone.js Integration

1. **Audio Context**: Initialized on first user interaction
2. **Gain Node**: Master volume control connected to destination
3. **Players**: Created dynamically for each sound
4. **Connection Chain**: 
```
   Tone.Player → gain.current → Tone.Destination
```

### Sound Mapping

- **7 Rows**: Each row represents a different sound/note
- **Grid Colors**: Visual indicator for each row
  - Row 0: Aqua
  - Row 1: RGB(192, 91, 91)
  - Row 2: Cadet Blue
  - Row 3: Chartreuse
  - Row 4: Chocolate
  - Row 5: Cornflower Blue
  - Row 6: Crimson

---

## 🔌 API Endpoints

### GET `/channel/:channame`

Fetches audio file URLs for specified instrument channel.

**Parameters:**
- `channame`: 'piano' or 'guitar'

**Response:**
```json
{
  "piano": [
    "https://s3-signed-url-1",
    "https://s3-signed-url-2",
    ...
  ]
}
```

**Flow:**
1. Receive channel name
2. Query S3 bucket with prefix (folder name)
3. Generate signed URLs (1-hour expiry)
4. Return array of URLs
5. 2-second delay (simulated loading)

---

## 🛠️ Technologies Used

### Frontend
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tone.js** - Web Audio API wrapper
- **Vite** - Build tool
- **CSS Grid** - Layout system

### Backend
- **Express 5** - Web server
- **AWS SDK v3** - S3 integration
- **CORS** - Cross-origin support
- **dotenv** - Environment configuration

### Storage
- **AWS S3** - Audio file storage
- **Pre-signed URLs** - Secure file access

---

## ⚙️ Setup & Installation

### Prerequisites
```bash
Node.js >= 18.0.0
npm or yarn
AWS account with S3 bucket
```

### Environment Variables

Create `server/.env`:
```env
PORT=3005
ENDPOINTS3=your-s3-endpoint
AceesKeyId=your-access-key
SecretKey=your-secret-key
```

### Installation
```bash
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

### Running the Application
```bash
# Terminal 1 - Start backend server
cd server
npm run dev

# Terminal 2 - Start frontend
cd client
npm run dev
```

The app will be available at `http://localhost:5173` (or your Vite port)

---

## 🎮 Usage Guide

1. **Load the app**: Wait for audio files to load
2. **Click grid squares**: Toggle sounds on (color) or off (light blue)
3. **Press Play ▶**: Start playback
4. **Adjust Speed**: Use slider to change tempo
5. **Change Volume**: Use volume slider
6. **Switch Instruments**: Click channel button (🎹/🎸)
7. **Add Columns**: Use +/- buttons (5-70 range)
8. **Stop**: Click ⏹ to stop playback
9. **Restart**: Reset all settings to defaults

---

## 🔧 Key Components Explained

### AudioSquare Component
- Individual grid cell
- Handles click events
- Plays audio sample on click if active
- Visual feedback with color changes
- Column highlighting during playback

### GridMusic Component
- Renders the entire grid
- Maps gridState to AudioSquare components
- Handles loading and error states
- Dynamic grid sizing

### Play Component
- Main playback control
- Manages column progression
- Uses useEffect for automatic advancement
- Handles play/pause logic

### MyContext Provider
- Central state management
- Audio engine initialization
- Channel data fetching
- Grid state synchronization

---

## 🚀 Performance Considerations

- **Lazy Loading**: Audio files loaded on demand
- **Ref Usage**: `isPlaying` and `gain` use refs to avoid re-renders
- **Memoization**: Grid state updates are batched
- **Audio Pooling**: Tone.js manages audio resources efficiently

---

## 🐛 Error Handling

- **Network Errors**: Caught and displayed as error message
- **Invalid URLs**: Handled by Tone.js player
- **S3 Connection**: Try-catch blocks in server
- **Missing Files**: Server returns 500 status

---

## 📝 Future Enhancements

- [ ] More instrument channels
- [ ] Save/Load patterns
- [ ] Export to audio file
- [ ] Recording functionality
- [ ] Swing/groove settings
- [ ] Individual track volume
- [ ] Pattern presets
- [ ] Mobile responsive design
- [ ] Drag to paint patterns
- [ ] Undo/Redo functionality

---

## 📄 License

ISC

---

## 👤 Author

Your Name

---

## 🙏 Acknowledgments

- Tone.js for audio capabilities
- AWS for reliable storage
- React community for ecosystem tools
