import type { ValidChannels } from "../../types/Channels"
import { debugReceived, debugSentToOutput } from "../components/helpers/debugLog"

export function send(ID: ValidChannels, channels: string[], data: any = null) {
    if (ID === "OUTPUT") debugSentToOutput(channels)
    channels.forEach((channel: string) => window.api.send(ID, { channel, data }))
}

export function receive(ID: ValidChannels, channels: any, id = "") {
    window.api.receive(
        ID,
        (msg: any) => {
            // linux dialog behind window message
            // if ((ID === OPEN_FOLDER || ID === OPEN_FILE) && get(activePopup) === "alert") {
            //     activePopup.set(null)
            //     alertMessage.set("")
            // }

            if (ID === "OUTPUT") debugReceived(msg.channel, msg.data)
            if (channels[msg.channel]) channels[msg.channel](msg.data)
        },
        id
    )
}

export function destroy(ID: ValidChannels, id: string) {
    window.api.removeListener(ID, id)
}
