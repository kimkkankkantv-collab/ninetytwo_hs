    import React from 'react'
import p1 from '../public/p1.jpg'
import p2 from '../public/p2.jpg'
import p3 from '../public/p3.jpg'

const items = [
  {id:1, name:'수분광채 크림', desc:'겉은 촉촉, 속은 탄력', img:p1},
  {id:2, name:'비타민 C 세럼', desc:'칙칙함 개선, 생기 부여', img:p2},
  {id:3, name:'저자극 클렌저', desc:'부드러운 거품, 깔끔한 세정', img:p3},
]

export default function Products(){
  return (
    <section id="products" className="py-12">
      <h3 className="text-2xl font-bold">추천 제품</h3>
      <p className="text-gray-600 mt-1">방문 시 직접 체험 가능한 인기 제품들입니다.</p>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
        {items.map(item => (
          <div key={item.id} className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
            <img src={item.img} alt={item.name} className="w-full h-44 object-cover rounded-md" />
            <div className="mt-3 text-center">
              <div className="font-semibold">{item.name}</div>
              <div className="text-sm text-gray-500 mt-1">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
