import { MessageCircle } from 'lucide-react';

const NoChatSelected = () => {
    return (
        <div className="w-full flex flex-1 flex-col items-center justify-center p-16 bg-base-100/50">
            <div className="max-w-md text-center space-y-6">
                {/* Icon Display */}
                <div className="flex justify-center gap-4 mb-1">
                    <div className="relative">
                        <div
                            className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center
             justify-center animate-bounce"
                        >
                            <MessageCircle className="w-10 h-10 text-primary " />
                        </div>
                    </div>
                </div>

                {/* Welcome Text */}
                <h2 className="text-2xl font-bold">Welcome to <em>Wazzup!</em></h2>

                <p className="text-base-content/60 font-bold">
                    Start chatting
                </p>
            </div>
        </div>
    );
};

export default NoChatSelected;