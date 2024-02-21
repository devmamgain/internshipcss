import FilterS from "./FilterS"
import NavBar from "./NavBar"

const PageDesign =()=>{
    return(
        <div className="flex flex-col  h-screen ">
        <NavBar />
        <FilterS />
      
        <div className="flex-grow bg-indigo-950 divide-y  ">
        <div >
            .
         <div className="flex gap-4 p-3 ml-10 mr-10 bg-slate-800 rounded-lg text-gray-100 ">
            <span className=" bg-yellow-600 text-black w-11 text-center rounded-sm">
                TEST
            </span>
            These are test payouts and do not affect the actual balance. They are used only for the purpose of integrating events.
            <span className=" text-blue-500">
                Learn More
            </span>
         </div>
         <div className="flex ml-12 mt-3 mb-3">
         <div className="flex">
  <div class="flex items-center text-gray-100">
    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="default-checkbox" class="ms-2 text-sm font-medium">Showing 1-5 payouts . Sort by</label>
</div>

 <button class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-blue-500">latest creation date <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg></button>
  </div>
  <div className="ml-auto text-blue-400 flex gap-5">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
</svg>
<div className="flex gap-2 mr-10">
<button className="border-2 rounded-sm border-blue-400 w-28 flex gap-1 justify-center items-center">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
</svg>
 Export
</button>
<button  class="inline-flex rounded-sm items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">+ Payout<svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg></button>
</div>
  </div>
         </div>
         
         </div>
         <div class="relative overflow-x-auto text-gray-100 ml-10 mr-10 ">
    <table class="w-full text-left rtl:text-right ">
        <thead class=" uppercase">
                <tr>
            <th scope="col" className="px-6 py-3">
                CREATED AT
            </th>
            <th scope="col" className="px-6 py-3">
                AMOUNT
            </th>
            <th scope="col" className="px-6 py-3">
                STATUS
            </th>
            <th scope="col" className="px-6 py-3">
                CONTACT
            </th>
            <th scope="col" className="px-6 py-3">
                CREATED BY
            </th>
            <th scope="col" className="px-6 py-3">
                UTR
            </th>
            </tr>
            </thead>
            <tbody >
                <tr >
                <td className="px-6 py-4">Fri 9 Feb,2:32 PM</td>
                <td className="px-6 py-4">10,000<span>.00</span></td>
                <td className="px-6 py-4">Queued</td>
                <td className="px-6 py-4">Shivam Arora</td>
                <td className="px-6 py-4">Aditya Sharma</td>
                <td className="px-6 py-4">--</td>
                </tr>
                <tr>
                <td className="px-6 py-4">Fri 9 Feb,1:25 PM</td>
                <td className="px-6 py-4">10,000<span>.00</span></td>
                <td className="px-6 py-4">Queued</td>
                <td className="px-6 py-4">Ujjwal</td>
                <td className="px-6 py-4">Aditya Sharma</td>
                <td className="px-6 py-4">--</td>
                </tr>
                <tr>
                <td className="px-6 py-4">Fri 9 Feb,12:04 PM</td>
                <td className="px-6 py-4">10,000<span>.00</span></td>
                <td className="px-6 py-4">Queued</td>
                <td className="px-6 py-4">Amit Kumar</td>
                <td className="px-6 py-4">Aditya Sharma</td>
                <td className="px-6 py-4">--</td>
                </tr>
                <tr>
                <td className="px-6 py-4">Thu 8 Feb,3:52 PM</td>
                <td className="px-6 py-4">50,000<span>.00</span></td>
                <td className="px-6 py-4">Queued</td>
                <td className="px-6 py-4">Harsh</td>
                <td className="px-6 py-4">Aditya Sharma</td>
                <td className="px-6 py-4">--</td>
                </tr>
                <tr>
                <td className="px-6 py-4">Tue 6 Feb,4:09 PM</td>
                <td className="px-6 py-4">10,000<span>.00</span></td>
                <td className="px-6 py-4">Queued</td>
                <td className="px-6 py-4">Random Verma</td>
                <td className="px-6 py-4">Aditya Sharma</td>
                <td className="px-6 py-4">--</td>
                </tr>
            </tbody>

         </table>
         </div>
         <div className="grid">
            <div className="ml-auto mt-3 mr-10 text-gray-100 flex gap-2">
            <button  class="inline-flex rounded-sm items-center px-4 py-2 text-sm font-medium text-center text-white bg-slate-950 hover:bg-slate-950 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">10<svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg></button>
            rows/page
            </div>
          
         </div>
         </div>
        </div>
    )
}
export default PageDesign