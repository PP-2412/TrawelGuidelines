'use client'

import { CitySelection } from './EuropeBuilder'

type Props = {
  selectedCities: CitySelection[]
}

export default function EuropeMap({ selectedCities }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden sticky top-28">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#12103d] to-[#43124a] px-6 py-4">
        <h2 className="font-display text-xl text-white">
          Your Route
        </h2>
        <p className="font-sans text-xs text-white/70 mt-1">
          {selectedCities.length > 0 
            ? `${selectedCities.length} destinations selected`
            : 'Select cities to see them on the map'
          }
        </p>
      </div>

      {/* Map Container */}
      <div className="relative aspect-[4/3] bg-[#b8d4e8] p-4">
        <svg viewBox="0 0 800 600" className="w-full h-full">
          <defs>
            <linearGradient id="landGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e8f0e8" />
              <stop offset="100%" stopColor="#d4e4d4" />
            </linearGradient>
          </defs>
          
          {/* ICELAND */}
          <path d="M 85,50 L 100,45 L 120,48 L 135,55 L 140,68 L 135,80 L 120,85 L 100,83 L 85,75 L 80,62 Z" 
            fill="url(#landGrad)" stroke="#8b9a8b" strokeWidth="1"/>

          {/* NORWAY */}
          <path d="M 320,30 L 340,25 L 360,30 L 380,40 L 395,55 L 405,75 L 410,100 L 405,130 L 395,155 L 380,175 L 365,185 L 350,188 L 335,185 L 320,175 L 310,160 L 305,140 L 300,115 L 300,90 L 305,65 L 315,45 Z" 
            fill="url(#landGrad)" stroke="#8b9a8b" strokeWidth="1"/>

          {/* SWEDEN */}
          <path d="M 365,185 L 380,175 L 395,155 L 405,130 L 410,100 L 420,120 L 430,145 L 435,170 L 440,195 L 438,220 L 430,240 L 415,250 L 400,248 L 385,240 L 375,225 L 368,205 Z" 
            fill="url(#landGrad)" stroke="#8b9a8b" strokeWidth="1"/>

          {/* FINLAND */}
          <path d="M 440,70 L 460,65 L 485,70 L 510,85 L 525,110 L 530,140 L 525,170 L 510,195 L 490,210 L 470,215 L 450,210 L 440,195 L 435,170 L 430,145 L 432,115 L 438,90 Z" 
            fill="url(#landGrad)" stroke="#8b9a8b" strokeWidth="1"/>

          {/* UNITED KINGDOM */}
          <path d="M 185,160 L 200,155 L 215,158 L 228,165 L 235,178 L 238,195 L 235,215 L 225,235 L 210,245 L 195,248 L 180,245 L 170,235 L 165,220 L 163,200 L 168,180 L 178,165 Z" 
            fill="url(#landGrad)" stroke="#8b9a8b" strokeWidth="1"/>
          
          {/* Scotland extension */}
          <path d="M 195,120 L 208,115 L 222,118 L 230,128 L 232,142 L 228,155 L 215,158 L 200,155 L 188,145 L 185,132 Z" 
            fill="url(#landGrad)" stroke="#8b9a8b" strokeWidth="1"/>

          {/* IRELAND */}
          <path d="M 120,185 L 135,180 L 150,183 L 160,193 L 163,208 L 160,225 L 150,240 L 135,245 L 120,242 L 110,232 L 105,215 L 108,198 Z" 
            fill="url(#landGrad)" stroke="#8b9a8b" strokeWidth="1"/>

          {/* PORTUGAL */}
          <path d="M 30,330 L 45,325 L 60,328 L 70,340 L 75,360 L 75,385 L 70,410 L 60,430 L 45,440 L 30,438 L 20,425 L 15,405 L 15,380 L 18,355 L 25,340 Z" 
            fill="url(#landGrad)" stroke="#8b9a8b" strokeWidth="1"/>

          {/* SPAIN */}
          <path d="M 60,328 L 85,322 L 120,320 L 155,325 L 190,335 L 215,350 L 230,370 L 235,395 L 228,420 L 210,440 L 185,450 L 155,455 L 125,455 L 95,450 L 70,440 L 60,430 L 70,410 L 75,385 L 75,360 L 70,340 Z" 
            fill="url(#landGrad)" stroke="#8b9a8b" strokeWidth="1"/>

          {/* FRANCE */}
          <path d="M 215,250 L 245,245 L 275,248 L 300,260 L 320,280 L 330,305 L 332,330 L 325,355 L 310,370 L 285,378 L 255,380 L 230,375 L 215,365 L 210,350 L 215,330 L 225,310 L 230,285 L 228,265 Z" 
            fill="url(#landGrad)" stroke="#8b9a8b" strokeWidth="1"/>

          {/* BELGIUM */}
          <path d="M 270,220 L 288,218 L 305,222 L 315,235 L 312,250 L 300,260 L 285,258 L 272,248 L 268,235 Z" 
            fill="url(#landGrad)" stroke="#8b9a8b" strokeWidth="1"/>

          {/* NETHERLANDS */}
          <path d="M 280,195 L 298,190 L 315,195 L 325,208 L 322,222 L 310,230 L 295,228 L 282,218 L 278,205 Z" 
            fill="url(#landGrad)" stroke="#8b9a8b" strokeWidth="1"/>

          {/* DENMARK */}
          <path d="M 350,188 L 368,185 L 385,190 L 395,205 L 392,220 L 380,230 L 365,232 L 352,225 L 348,210 L 348,198 Z" 
            fill="url(#landGrad)" stroke="#8b9a8b" strokeWidth="1"/>

          {/* GERMANY */}
          <path d="M 315,235 L 345,230 L 375,235 L 405,245 L 425,260 L 440,280 L 445,305 L 440,330 L 425,350 L 400,360 L 370,365 L 345,360 L 325,350 L 315,335 L 310,315 L 312,295 L 318,275 L 320,255 Z" 
            fill="url(#landGrad)" stroke="#8b9a8b" strokeWidth="1"/>

          {/* POLAND */}
          <path d="M 445,220 L 475,215 L 510,220 L 540,235 L 560,255 L 568,280 L 565,305 L 550,325 L 525,335 L 495,338 L 470,330 L 450,315 L 440,295 L 440,270 L 443,245 Z" 
            fill="url(#landGrad)" stroke="#8b9a8b" strokeWidth="1"/>

          {/* CZECH REPUBLIC */}
          <path d="M 425,260 L 450,255 L 475,260 L 490,275 L 488,295 L 475,310 L 455,315 L 435,310 L 425,295 L 423,278 Z" 
            fill="url(#landGrad)" stroke="#8b9a8b" strokeWidth="1"/>

          {/* AUSTRIA */}
          <path d="M 400,290 L 425,285 L 455,288 L 480,295 L 495,310 L 490,328 L 475,340 L 450,343 L 425,338 L 405,328 L 395,310 L 397,300 Z" 
            fill="url(#landGrad)" stroke="#8b9a8b" strokeWidth="1"/>

          {/* SWITZERLAND */}
          <path d="M 345,300 L 365,295 L 385,298 L 400,310 L 395,328 L 380,338 L 360,340 L 345,335 L 338,322 L 340,310 Z" 
            fill="url(#landGrad)" stroke="#8b9a8b" strokeWidth="1"/>

          {/* ITALY */}
          <path d="M 360,340 L 385,335 L 410,340 L 430,355 L 440,375 L 445,400 L 440,430 L 428,460 L 410,485 L 390,505 L 375,515 L 360,518 L 348,512 L 340,495 L 338,470 L 342,445 L 350,420 L 358,395 L 360,370 L 355,355 Z" 
            fill="url(#landGrad)" stroke="#8b9a8b" strokeWidth="1"/>
          
          {/* Sicily */}
          <path d="M 390,540 L 410,535 L 430,540 L 440,555 L 435,568 L 418,575 L 398,572 L 385,560 L 387,548 Z" 
            fill="url(#landGrad)" stroke="#8b9a8b" strokeWidth="1"/>

          {/* SLOVENIA/CROATIA */}
          <path d="M 425,338 L 445,335 L 468,340 L 485,352 L 495,370 L 492,388 L 480,405 L 460,415 L 440,413 L 425,400 L 418,380 L 420,360 L 423,348 Z" 
            fill="url(#landGrad)" stroke="#8b9a8b" strokeWidth="1"/>

          {/* HUNGARY */}
          <path d="M 475,310 L 505,308 L 535,315 L 555,328 L 560,348 L 552,368 L 535,380 L 510,383 L 485,378 L 468,365 L 463,345 L 468,325 Z" 
            fill="url(#landGrad)" stroke="#8b9a8b" strokeWidth="1"/>

          {/* ROMANIA */}
          <path d="M 535,315 L 565,310 L 595,318 L 615,335 L 625,360 L 620,390 L 605,415 L 580,428 L 555,430 L 535,420 L 520,400 L 520,375 L 525,350 L 532,330 Z" 
            fill="url(#landGrad)" stroke="#8b9a8b" strokeWidth="1"/>

          {/* BULGARIA */}
          <path d="M 555,430 L 580,428 L 605,435 L 625,450 L 630,470 L 620,488 L 600,498 L 575,498 L 555,488 L 545,470 L 545,450 Z" 
            fill="url(#landGrad)" stroke="#8b9a8b" strokeWidth="1"/>

          {/* GREECE */}
          <path d="M 520,470 L 545,465 L 570,470 L 590,485 L 600,510 L 595,540 L 580,565 L 555,575 L 530,573 L 510,558 L 500,535 L 505,510 L 512,490 Z" 
            fill="url(#landGrad)" stroke="#8b9a8b" strokeWidth="1"/>
          
          {/* Greek Islands */}
          <path d="M 540,540 L 555,538 L 568,545 L 570,558 L 560,568 L 545,568 L 535,558 Z" 
            fill="url(#landGrad)" stroke="#8b9a8b" strokeWidth="1"/>

          {/* UKRAINE */}
          <path d="M 565,255 L 600,248 L 635,255 L 670,270 L 695,290 L 708,315 L 710,345 L 700,375 L 680,400 L 655,415 L 625,420 L 600,415 L 580,400 L 568,380 L 560,355 L 558,325 L 562,295 L 565,270 Z" 
            fill="url(#landGrad)" stroke="#8b9a8b" strokeWidth="1"/>

          {/* BELARUS */}
          <path d="M 540,195 L 570,190 L 600,195 L 625,210 L 645,230 L 650,255 L 640,280 L 620,295 L 595,298 L 570,292 L 550,275 L 540,250 L 538,220 Z" 
            fill="url(#landGrad)" stroke="#8b9a8b" strokeWidth="1"/>

          {/* BALTIC STATES */}
          <path d="M 490,150 L 520,145 L 550,152 L 575,168 L 585,190 L 580,215 L 560,230 L 535,235 L 510,228 L 490,210 L 485,185 L 488,165 Z" 
            fill="url(#landGrad)" stroke="#8b9a8b" strokeWidth="1"/>

          {/* SLOVAKIA */}
          <path d="M 475,285 L 500,282 L 525,288 L 540,302 L 535,318 L 520,328 L 500,330 L 480,323 L 470,308 L 472,295 Z" 
            fill="url(#landGrad)" stroke="#8b9a8b" strokeWidth="1"/>

          {/* Connection Lines */}
          {selectedCities.length > 1 && selectedCities.map((city, index) => {
            if (index === selectedCities.length - 1) return null
            const nextCity = selectedCities[index + 1]
            return (
              <g key={`line-${city.id}-${nextCity.id}`}>
                <line
                  x1={city.coordinates.x}
                  y1={city.coordinates.y}
                  x2={nextCity.coordinates.x}
                  y2={nextCity.coordinates.y}
                  stroke="#12103d"
                  strokeWidth="3"
                  strokeDasharray="8,5"
                  opacity="0.5"
                />
                <defs>
                  <marker
                    id={`arrow-${index}`}
                    viewBox="0 0 10 10"
                    refX="8"
                    refY="5"
                    markerWidth="6"
                    markerHeight="6"
                    orient="auto"
                  >
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#12103d" />
                  </marker>
                </defs>
                <line
                  x1={city.coordinates.x}
                  y1={city.coordinates.y}
                  x2={nextCity.coordinates.x}
                  y2={nextCity.coordinates.y}
                  stroke="#12103d"
                  strokeWidth="2"
                  opacity="0.7"
                  markerEnd={`url(#arrow-${index})`}
                />
              </g>
            )
          })}

          {/* City Markers */}
          {selectedCities.map((city, index) => (
            <g key={city.id}>
              {/* Pulse animation */}
              <circle
                cx={city.coordinates.x}
                cy={city.coordinates.y}
                r="15"
                fill="none"
                stroke="#12103d"
                strokeWidth="2"
                opacity="0.4"
              >
                <animate attributeName="r" from="12" to="25" dur="2s" repeatCount="indefinite"/>
                <animate attributeName="opacity" from="0.6" to="0" dur="2s" repeatCount="indefinite"/>
              </circle>
              
              {/* Pin shadow */}
              <ellipse cx={city.coordinates.x} cy={city.coordinates.y + 22} rx="8" ry="3" fill="#000" opacity="0.2"/>
              
              {/* Map pin */}
              <g transform={`translate(${city.coordinates.x}, ${city.coordinates.y})`}>
                <path d="M 0,-18 C -7,-18 -12,-13 -12,-6 C -12,2 0,18 0,18 C 0,18 12,2 12,-6 C 12,-13 7,-18 0,-18 Z"
                  fill="#12103d" stroke="white" strokeWidth="2"/>
                <circle cx="0" cy="-6" r="5" fill="white"/>
              </g>
              
              {/* Order number */}
              <text x={city.coordinates.x} y={city.coordinates.y - 3} textAnchor="middle" fill="#12103d" 
                fontSize="14" fontWeight="bold" fontFamily="sans-serif">{index + 1}</text>
              
              {/* City name */}
              <text x={city.coordinates.x} y={city.coordinates.y + 32} textAnchor="middle" fill="#12103d" 
                fontSize="12" fontWeight="600" fontFamily="sans-serif">{city.city}</text>
            </g>
          ))}
        </svg>

        {/* Legend */}
        {selectedCities.length > 0 && (
          <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-md">
            <div className="flex flex-wrap gap-2">
              {selectedCities.map((city, index) => (
                <span key={city.id} className="inline-flex items-center gap-1.5 px-2 py-1 bg-[#f5f5f5] rounded-full font-sans text-xs">
                  <span className="w-4 h-4 bg-[#12103d] text-white rounded-full text-[10px] flex items-center justify-center font-bold">
                    {index + 1}
                  </span>
                  {city.city}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {selectedCities.length === 0 && (
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="font-sans text-sm text-[#44618b] bg-white/80 px-4 py-2 rounded-lg">
              Your selected cities will appear here
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
