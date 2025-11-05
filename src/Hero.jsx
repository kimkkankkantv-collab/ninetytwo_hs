    import React from 'react'
export default function Hero(){
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center text-white font-bold">NT</div>
          <div>
            <h1 className="text-lg font-semibold">나인티투 (NinetyTwo)</h1>
            <p className="text-xs text-gray-500">자연을 담은 프리미엄 스킨케어 — 직접 체험하고 구매하세요</p>
          </div>
        </div>
        <div>
          <a href="sms:01096675951" className="bg-rose-500 text-white px-4 py-2 rounded-md font-medium">예약요청</a>
        </div>
      </div>
    </header>
  )
}
