    import React from 'react'
export default function About(){
  return (
    <section id="about" className="py-12">
      <div className="md:flex gap-8 items-center">
        <div className="md:w-2/3">
          <h2 className="text-2xl font-bold">회사소개</h2>
          <p className="mt-4 text-gray-700">나인티투(NinetyTwo)는 안전하고 투명한 유통을 약속합니다. 모든 제품은 국내외 엄선된 원료로 제조되며, 정품 보증과 고객 만족을 최우선으로 합니다.</p>
        </div>
        <div className="md:w-1/3 mt-6 md:mt-0">
          <div className="bg-white p-4 rounded-lg shadow">
            <h4 className="font-semibold">사업자 정보</h4>
            <ul className="text-sm text-gray-600 mt-2">
              <li>상호: 나인티투 (NinetyTwo)</li>
              <li>대표: 김현수</li>
              <li>사업자등록번호: 305-41-27440</li>
              <li>연락처: 010-9667-5951</li>
              <li>주소: 대구시 달성군 유가읍 테크노대로 195 105동 1205호</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
