// import React from 'react'

export default function MovieCard() {
  return (
    <>
      <div className="w-[160px] relative">
        <div className="relative">
          {/* Movie Image */}
          <img
            src={
              "https://image-resizer-cloud-api.akamaized.net/image/402492BB-07B1-4E61-B7BE-A6A677B3E32C/0-2x3.jpg?width=305&updatedTime=2024-10-04T05:12:25Z&dt=Web"
            }
            alt="3 Roses"
            className="rounded-lg w-full"
          />
          <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>
      </div>
    </>
  );
}
