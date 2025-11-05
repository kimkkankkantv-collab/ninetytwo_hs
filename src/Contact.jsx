    import React from 'react'
export default function Contact(){
  return (
    <section id="contact" className="py-12">
      <h3 className="text-2xl font-bold">상담/예약</h3>
      <p className="text-gray-600 mt-2">예약은 아래 버튼을 눌러 문자로 남겨주세요.</p>
      <div className="mt-4">
        <a href="sms:01096675951" className="inline-block bg-rose-500 text-white px-5 py-3 rounded-md">예약요청</a>
      </div>
    </section>
  )
}
