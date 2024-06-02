export default function Resources() {
  return (
    <div>
      <h1 className="pt-20 text-center font-serif text-4xl text-stone-950">
        Find groups in North Central Ohio
      </h1>
      <div className="flex flex-col mx-auto w-3/4">
        <div className="flex mt-8 mb-2 h-9 w-full border border-solid border-black rounded-lg bg-white">
          <input
            id="searchText"
            className="w-full outline-none rounded-lg indent-1.5"
            placeholder="Search for groups here"
          />
          <button className="w-8 text-xl">
            <i className="fa fa-search mr-2 hover:text-2xl"></i>
          </button>
        </div>
        <p className="font-bold">Location</p>
        <div className="flex flex-wrap mb-3 w-full h-auto m-auto my-1">
          <div className="px-1.5 py-0.5 m-1 bg-zinc-500 border border-solid border-zinc-800 rounded-lg select-none locationBtn">
            Paris
          </div>
          <div className="px-1.5 py-0.5 m-1 bg-zinc-500 border border-solid border-zinc-800 rounded-lg select-none locationBtn">
            New York
          </div>
          <div className="px-1.5 py-0.5 m-1 bg-zinc-500 border border-solid border-zinc-800 rounded-lg select-none locationBtn">
            Tokyo
          </div>
          <div className="px-1.5 py-0.5 m-1 bg-zinc-500 border border-solid border-zinc-800 rounded-lg select-none locationBtn">
            Shanghai
          </div>
          <div className="px-1.5 py-0.5 m-1 bg-zinc-500 border border-solid border-zinc-800 rounded-lg select-none locationBtn">
            Beijing
          </div>
        </div>
        <p className="font-bold">Type of group</p>
        <div className="flex flex-wrap w-full h-auto m-auto my-1">
          <div className="px-1.5 py-0.5 m-1 bg-zinc-500 border border-solid border-zinc-800 rounded-lg select-none typeOfGroupBtn">
            Cars
          </div>
          <div className="px-1.5 py-0.5 m-1 bg-zinc-500 border border-solid border-zinc-800 rounded-lg select-none typeOfGroupBtn">
            Trees
          </div>
          <div className="px-1.5 py-0.5 m-1 bg-zinc-500 border border-solid border-zinc-800 rounded-lg select-none typeOfGroupBtn">
            Plants
          </div>
          <div className="px-1.5 py-0.5 m-1 bg-zinc-500 border border-solid border-zinc-800 rounded-lg select-none typeOfGroupBtn">
            Space
          </div>
          <div className="px-1.5 py-0.5 m-1 bg-zinc-500 border border-solid border-zinc-800 rounded-lg select-none typeOfGroupBtn">
            Animals
          </div>
        </div>
        <div className="flex h-8 mx-auto my-3 w-full border border-solid border-black rounded-lg bg-slate-400">
          <div className="m-auto text-center font-bold w-3/12">Name</div>
          <div className="m-auto text-center font-bold w-1/5">Location</div>
          <div className="m-auto text-center font-bold w-1/6">Type</div>
          <div className="m-auto text-center font-bold w-2/5">Description</div>
        </div>
        <div id="resultPage"></div>
        <script src="@/scripts/groups.jsx"></script>
      </div>
    </div>
  )
}
