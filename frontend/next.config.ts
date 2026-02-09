import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites(){
    //リバースプロキシ　host.docker.internal→コンテナ内からホスト側に接続する際に使用する
    return[
      {
        source:'/api/:path',
        destination:"http://host.docker.internal:8000/api/:path*/",
      },
    ]
  }

};

export default nextConfig;
