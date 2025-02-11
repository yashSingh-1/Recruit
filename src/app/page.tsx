export default function Home() {
  return (
    <div className="bg-gray-950 h-screen text-white">
      <div className="grid grid-cols-2">
        <div className="flex justify-center items-center p-4">
          <span className="uppercase font-bold font-mono text-6xl">
            The magic devs
            <br />
            <span className="lowercase">
              you&apos;ve been
              <br />
              searching for!
            </span>
          </span>
        </div>
        <div>
          <span>
            Why waste so much time finding a average <br />
            developer when you can find <br />
            an awesome one
          </span>
        </div>
      </div>
    </div>
  );
}
