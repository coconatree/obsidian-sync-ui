import type { FC } from "react"

export const NewsletterModal: FC<{ 
    isOpen: boolean, 
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    reference: React.Ref<HTMLDivElement> | undefined 
}> = ({ isOpen, setIsOpen, reference }) => {

    const closeModal = () => setIsOpen(false)

    const handleSubmit = (e: React.SubmitEvent) => {
        e.preventDefault()
        alert("Subscribed!")
        setIsOpen(false)
    }

    return (
        <div>
            {/* Modal overlay */}
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50" ref={reference}>
                    {/* Modal box */}
                    <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
                        {/* Close button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
                        >
                            ✕
                        </button>

                        <h2 className="text-2xl font-bold mb-4">Subscribe to our newsletter</h2>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <input
                                type="email"
                                placeholder="Your email"
                                required
                                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button
                                type="submit"
                                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}