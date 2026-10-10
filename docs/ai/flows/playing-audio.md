# Playing audio

## Observed result

[verified] Native AudioPlayer.start with generated quiet WAV; media clock observed (speaker audibility not verified). Evidence: [observation data](observations.json), action ID `playing-audio`, recorded 2026-10-10T17:27:25.437Z.

[code] Verification scope: AudioPlayer.start returned true and the HTMLAudioElement clock advanced beyond 0.1 s for a generated quiet WAV. The UI button and speaker audibility, hardware devices, multichannel routing and playlists were not tested.

[code] Source steps below explain the current implementation. Their intermediate calls are not all individually instrumented; an observed end result does not upgrade every step to verified.

## File-by-file sequence

1. [code] The preview play button uses AudioPlayer.start with pause-if-playing and selected start time. ([src/frontend/components/show/AudioPreview.svelte:175](../../../src/frontend/components/show/AudioPreview.svelte#L175))

2. [code] Start resolves a unique playback key/path, guards locks/loading and coordinates existing playback/fades. ([src/frontend/audio/audioPlayer.ts:81](../../../src/frontend/audio/audioPlayer.ts#L81))

3. [code] AudioPlayer creates a native HTMLAudioElement and waits for readiness/error. ([src/frontend/audio/audioPlayer.ts:228](../../../src/frontend/audio/audioPlayer.ts#L228))

4. [code] The playingAudio entry records the actual audio element and occurrence/playlist metadata. ([src/frontend/audio/audioPlayer.ts:157](../../../src/frontend/audio/audioPlayer.ts#L157))

5. [code] Initialization starts playback, emits audio_start and attaches analysis/routing/processing. ([src/frontend/audio/audioPlayer.ts:309](../../../src/frontend/audio/audioPlayer.ts#L309))

6. [code] The shared audio routing manager updates processing nodes; clock advancement alone cannot verify audible/device output. ([src/frontend/audio/audioPlayer.ts:319](../../../src/frontend/audio/audioPlayer.ts#L319))

## State, messages and history

[code] Read [audio](../subsystems/audio.md) for invariants and dependency maps. Each traced file has complete import/store/message/timing evidence:

- [src/frontend/components/show/AudioPreview.svelte](../generated/files/src_frontend_components_show_AudioPreview.svelte.md)
- [src/frontend/audio/audioPlayer.ts](../generated/files/src_frontend_audio_audioPlayer.ts.md)

[code] 5 related decision records: [full IDs and locations](playing-audio.dependencies.json); representative records:



[code] No specific companion finding assigned. See the [evidence method](README.md) before reusing these observations.
