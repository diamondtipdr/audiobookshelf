
export const state = () => ({
  streamAudiobook: null,
  showEditModal: false,
  selectedAudiobook: null,
  playOnLoad: false,
  isScanning: false,
  isScanningCovers: false,
  scanProgress: null,
  coverScanProgress: null,
  developerMode: false
})

export const getters = {}

export const actions = {}

export const mutations = {
  setStreamAudiobook(state, audiobook) {
    state.playOnLoad = true
    state.streamAudiobook = audiobook
  },
  setStream(state, stream) {
    state.playOnLoad = false
    state.streamAudiobook = stream ? stream.audiobook : null
  },
  clearStreamAudiobook(state, audiobookId) {
    if (state.streamAudiobook && state.streamAudiobook.id === audiobookId) {
      state.playOnLoad = false
      state.streamAudiobook = null
    }
  },
  setPlayOnLoad(state, val) {
    state.playOnLoad = val
  },
  showEditModal(state, audiobook) {
    state.selectedAudiobook = audiobook
    state.showEditModal = true
  },
  setShowEditModal(state, val) {
    state.showEditModal = val
  },
  setIsScanning(state, isScanning) {
    state.isScanning = isScanning
  },
  setScanProgress(state, scanProgress) {
    if (scanProgress && scanProgress.progress > 0) state.isScanning = true
    state.scanProgress = scanProgress
  },
  setIsScanningCovers(state, isScanningCovers) {
    state.isScanningCovers = isScanningCovers
  },
  setCoverScanProgress(state, coverScanProgress) {
    if (coverScanProgress && coverScanProgress.progress > 0) state.isScanningCovers = true
    state.coverScanProgress = coverScanProgress
  },
  setDeveloperMode(state, val) {
    state.developerMode = val
  }
}