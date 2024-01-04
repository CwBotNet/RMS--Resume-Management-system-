import PopUpFormCandidate from "@/components/PopUpFormCandidate"
import { Candidate } from "@/components/models/Candidate"

const CandidatePage = () => {
    return (
        <div className='container'>
            <div className='flex justify-center mb-12 mt-[20vh]'>
                <h1 className='font-bold text-xl capitalize'>candidate page</h1>
            </div>
            <div className='flex justify-end mb-4'>
                <PopUpFormCandidate name="Add"  button="Add candidate +"/>
            </div>
            <Candidate />
        </div>
    )
}

export default CandidatePage
