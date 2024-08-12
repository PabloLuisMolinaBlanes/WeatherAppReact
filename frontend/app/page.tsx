import Image from "next/image";

export default function Home() {
  return (
    <div id="header" className="grid grid-flow-col">
        <p className="text-3xl hover:text-blue-600 text-left font-bold">Settings</p>
        <p className="text-3xl hover:text-blue-600 text-right font-bold">My list of places</p>
    </div>
  )
}