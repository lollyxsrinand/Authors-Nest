import React from 'react'
import { isAuthenticated } from "@/utils/isAuthenticated";

const ImageStudio = async () => {
  await isAuthenticated();
  return (
    <div>
      Image Studio Page
    </div>
  )
}

export default ImageStudio
