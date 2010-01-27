charcoal.syntax["plain"] = function()
{
	DEFINE("Line", FIND(CHAR('\n')));
	
	DEFINE("PlainText",
		REPEAT(
			REF("Line")
		)
	);
	
	ENTRY("PlainText");
}
