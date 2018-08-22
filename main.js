//attach listener to run test button
//run all tests
//empty counts and lists when btn clicked
//if tests passes
//  -inc passed count
//  -add test name to passed ul
//else
//  - inc failed count
//  - add tests name to failed ul

// Variables
var passed = 0;
var failed = 0;
var $pCount = $('#p_count')
var $fCount = $('#f_count')
var $passedList = $('#passed_tests')
var $failedList = $('#failed_tests')
var $btn = $('#run')

// Functions
function run() {
  console.log('Tests running')
}

// Listeners
$btn.on('click', function() {
  passed = 0
  failed = 0
  $pCount.text(passed)
  $fCount.text(failed)
  $failedList.empty()
  $passedList.empty()
  run()
})