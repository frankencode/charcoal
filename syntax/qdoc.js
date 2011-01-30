charcoal.syntax["qdoc"] = function()
{
	STATE_FLAG("verbatim", false);
	
	DEFINE("Word",
		REPEAT(1,
			CHOICE(
				RANGE('a', 'z'),
				RANGE('A', 'Z'),
				CHAR('_')
			)
		)
	);
	
	DEFINE("Brackets",
		GLUE(
			CHAR('('),
			REPEAT(
				CHOICE(
					REF("Brackets"),
					OTHER(')')
				)
			),
			CHAR(')')
		)
	);
	
	DEFINE("OpeningOrClosingParenthesis", RANGE("{}"));
	
	DEFINE("Parenthesis",
		GLUE(
			AHEAD(CHAR('{')),
			REF("OpeningOrClosingParenthesis"),
			REPEAT(
				CHOICE(
					IF("verbatim",
						FAIL(),
						REF("Command")
					),
					INLINE("Parenthesis"),
					OTHER('}')
				)
			),
			AHEAD(CHAR('}')),
			REF("OpeningOrClosingParenthesis")
		)
	);
	
	DEFINE("Argument",
		CHOICE(
			GLUE(
				REF("Word"),
				REPEAT(RANGE(' \t')),
				REF("Brackets")
			),
			REF("Word"),
			REF("Parenthesis")
		)
	);
	
	DEFINE("Format",
		GLUE(
			CHAR('\\'),
			REPEAT(0, 1,
				GLUE(
					AHEAD(CHAR('c')),
					SET("verbatim", true)
				)
			),
			KEYWORD("\
				c a i tt bold sub sup underline"
			)
		)
	);
	
	DEFINE("Command",
		GLUE(
			AHEAD(CHAR('\\')),
			CHOICE(
				STRING('\\\\'),
				GLUE(
					REF("Format"),
					REPEAT(0, 1,
						GLUE(
							REPEAT(RANGE(' \t')),
							REF("Argument")
						)
					),
					SET("verbatim", false)
				)
			)
		)
	);
	
	DEFINE("Text",
		REPEAT(
			FIND(
				REF("Command")
			)
		)
	);
	
	ENTRY("Text");
}
