import { useState } from 'react'
import { Company } from '../types'

const useCompany = () => {
  const [company, setCompany] = useState<Company>()
  return{
    company,
    setCompany
  }
}

export default useCompany