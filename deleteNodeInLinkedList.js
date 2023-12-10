var deleteNode = function(node) {
    
    // copy data from victim node
    node.val = node.next.val;
    
    // update linkage
    node.next = node.next.next;
    
	// Let JS GC automaticlly release victimNode in the background
    node = null;
	
    return;
};