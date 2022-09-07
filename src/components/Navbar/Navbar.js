import MessageIcon from "./chat.svg";

export function Navbar() {
  return (
    <div className="p-6 max-w-sm mr-5 ml-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
      <div className="shrink-0">
        <img className="h-12 w-12" src={MessageIcon} alt="Chat Logo" />
      </div>
      <div>
        <div className="text-xl font-medium text-black">ChitChat</div>
        <p className="text-slate-500">You have a new message!</p>
      </div>
    </div>
  );
}
