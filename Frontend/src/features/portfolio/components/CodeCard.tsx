const fields = [
  ['Name', '"Dhruv Tyagi"'],
  ['Role', '"Full-stack .NET Engineer"'],
  ['Location', '"Mohali, India"'],
  ['Backend', '["ASP.NET Core", "SQL Server"]'],
  ['Frontend', '["React", "TypeScript"]'],
  ['Focus', '"Reliable APIs & clean data"'],
  ['OpenToWork', 'true'],
]

export default function CodeCard() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0b0d12] text-left font-mono text-[11.5px] sm:text-[13px] text-[#d6deeb] shadow-2xl shadow-black/40">
      <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
        <span className="size-3 rounded-full bg-[#ff5f57]" />
        <span className="size-3 rounded-full bg-[#febc2e]" />
        <span className="size-3 rounded-full bg-[#28c840]" />
        <span className="flex-1 pr-10 text-center text-xs text-white/50">Developer.cs</span>
      </div>
      <pre className="overflow-x-auto p-4 leading-7 sm:p-5">
        <span className="text-[#c792ea]">var</span> dhruv = <span className="text-[#c792ea]">new</span>{' '}
        <span className="text-[#ffcb6b]">Developer</span>
        {'\n{\n'}
        {fields.map(([key, value], i) => (
          <span key={key}>
            {'    '}
            <span className="text-[#f07178]">{key}</span> ={' '}
            <span className={value === 'true' ? 'text-[#c792ea]' : 'text-[#c3e88d]'}>{value}</span>
            {i < fields.length - 1 ? ',\n' : '\n'}
          </span>
        ))}
        {'};'}
      </pre>
    </div>
  )
}
