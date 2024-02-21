const FilterS = ()=>{
    return(
        <div className="flex pt-6 pl-6 bg-blue-950 text-gray-100">
            <div className="flex gap-7">
        <div className="mt-2 ">
            Quick Filters:
        </div>
        <div class="flex items-center mb-4 border-2 rounded-sm w-40 h-11 ">
    <input id="default-checkbox" type="round-checkbox" value="" class="w-4 h-4 ml-5 text-blue-600 bg-gray-100 border-gray-300 rounded-full focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="default-checkbox" class=" ms-2 text-sm font-medium"> All Products</label>
</div>
<div class="flex items-center mb-4 border-2 rounded-sm w-60 h-11">
    <input type="round-checkbox" value="" class="ml-5 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-full focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label  class="ms-2 text-sm font-medium ">Scheduled for next 2 days</label>
</div>
<div class="flex items-center mb-4 border-2 rounded-sm w-60 h-11">
    <input  type="round-checkbox" value="" class="ml-5 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-full focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label  class="ms-2 text-sm font-medium ">Queued (RazorpayX A/c) 1</label>
</div>
</div>
<div className="ml-auto mr-10">
<button class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-blue-500">View More Filters <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg></button>
</div>
        </div>
    )
}
export default FilterS