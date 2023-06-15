/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"
import { FiX } from "react-icons/fi"
import { useStore } from "../../../store"

export function APIKeyInputModal({ show, onHide, onSaveKey }) {
    const apiKey = useStore(state => state.apiKey)
    const setAPIKey = useStore(state => state.setAPIKey)

    useEffect(() => {
        setAPIKey(localStorage.getItem('shcapk') || '')
    }, [])

    if (show) return <div className="bg-[#101827e8] w-screen h-screen overflow-y-scroll fixed left-0 top-0 z-20 flex flex-col p-2 items-center justify-center">
        <div className="post-info-modal p-10 rounded-xl  w-full max-w-xl border border-gray-700 bg-gray-800">
            <div className="flex items-center justify-between">
                <h3 className="text-white font-bold text-xl">Enter your API key</h3>
                <FiX className="hover:text-brand transition-all cursor-pointer" size={25} onClick={onHide} />
            </div>
            <p className="mt-3 mb-2">We take your security seriously. That&apos;s why we don&apos;t store your API keys anywhere in our system. Rest assured that your keys are safe with you.</p>
            <input value={apiKey} onChange={event => setAPIKey(event.target.value)} className="text-white bg-transparent border border-gray-600 w-full p-3 px-4 outline-none my-3 rounded-md" placeholder="e0e25c5d28..." />
            <a className="underline mb-5 block" href='https://showwcase.com/settings/api-keys' target="_blank" rel="noreferrer">Get your API key here</a>

            <button className={styles.button} onClick={() => onSaveKey(apiKey)}>
                <p>Done</p>
            </button>
        </div>
    </div>

    return <></>
}

const styles = {
    label: "text-gray-500 font-bold mb-1",
    iconLink: 'flex items-center whitespace-nowrap gap-1 transition-all hover:text-brand cursor-pointer',
    button: `w-max py-2 px-3 rounded-xl cursor-pointer flex items-center gap-2 bg-brand transition-all hover:opacity-80 select-none text-white`,
}