import Gallery from "@/components/organisms/Gallery"

export default function Home() {
  return (
    <div>
      <Gallery />
      <div className="flex h-auto w-11/12 xl:w-9/12 mx-auto my-3.5">
        <p className="w-8/12">
          Random works that are filling a position. Random works that are
          filling a position. Random works that are filling a position. Random
          works that are filling a position. Random works that are filling a
          position. Random works that are filling a position.
        </p>
        <a
          href="https://www.pollinator-pathway.org/_files/ugd/507894_aea8d80c7ec7486fa40e3841cadab9a1.pdf"
          target="_blank"
          className="text-xl ml-auto my-auto w-52 h-20 text-center border border-black bg-slate-500 hover:bg-white rounded font-bold flex justify-center items-center"
        >
          Learn more here
        </a>
      </div>
    </div>
  )
}
