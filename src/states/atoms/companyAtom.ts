import { atom } from "recoil";
import { Company } from "../../types";

const companyAtom = atom<Company>({
    key: "company"
})

export default companyAtom
