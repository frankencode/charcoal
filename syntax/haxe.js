charcoal.syntax["haxe"] = function()
{
	STATE_CHAR("quotation", '\0');
	
	DEFINE("BlockComment",
		GLUE(
			STRING("/*"),
			FIND(STRING("*/"))
		)
	);
	
	DEFINE("LineComment",
		GLUE(
			STRING("//"),
			FIND(AHEAD(CHAR('\n')))
		)
	);
	
	DEFINE("DocComment",
		CHOICE(
			GLUE(
				AHEAD(STRING("/**")),
				REF("BlockComment")
			),
			GLUE(
				AHEAD(STRING("//!")),
				REF("LineComment")
			)
		)
	);
	
	DEFINE("Comment",
		CHOICE(
			REF("DocComment"),
			REF("BlockComment"),
			REF("LineComment")
		)
	);
	
	DEFINE("Keyword",
		GLUE(
			KEYWORD("\
				function class static var if else while do for \
				break return continue extends implements import \
				switch case default public private try untyped \
				catch new this throw extern enum in interface \
				cast override dynamic typedef package callback \
				inline using"
			),
			NOT(INLINE("Identifier"))
		)
	);
	
	DEFINE("MacroConditional",
		GLUE(
			REPEAT(0, 1, CHAR('!')),
			CHOICE(
				GLUE(
					CHAR('('),
					FIND(CHAR(')'))
				),
				REF("Identifier")
			)
		)
	);
	
	DEFINE("Macro",
		GLUE(
			CHAR('#'),
			CHOICE(
				GLUE(
					KEYWORD("if elseif"),
					REPEAT(RANGE(" \t")),
					REF("MacroConditional")
				),
				KEYWORD("else end error line")
			),
			NOT(INLINE("Identifier"))
		)
	);
	
	DEFINE("Class",
		GLUE(
			REPEAT(
				GLUE(
					REF("Identifier"),
					CHAR('.')
				)
			),
			AHEAD(RANGE('A', 'Z')),
			REF("Identifier")
		)
	);
	
	DEFINE("Identifier",
		GLUE(
			CHOICE(
				RANGE('a', 'z'),
				RANGE('A', 'Z'),
				CHAR('_')
			),
			REPEAT(
				CHOICE(
					RANGE('a', 'z'),
					RANGE('A', 'Z'),
					RANGE('0', '9'),
					CHAR('_')
				)
			)
		)
	);
	
	DEFINE("Operator",
		KEYWORD("\
			++ -- ~ \
			%= &= |= ^= += -= *= /= <<= >>= >>>= \
			== != <= >= && || << -> ... \
			! < > ; : , . % & | ^ + * / - = \
			? @ [ ] { } ( ) \
		")
	);
	
	DEFINE_VOID("HexDigit",
		CHOICE(
			RANGE('0', '9'),
			RANGE('a', 'f'),
			RANGE('A', 'F')
		)
	);
	
	DEFINE("Boolean",
		KEYWORD("true false")
	);
	
	DEFINE("Integer",
		CHOICE(
			GLUE(
				STRING("0x"),
				REPEAT(1, INLINE("HexDigit"))
			),
			GLUE(CHAR('0'), REPEAT(1, RANGE('0', '7'))),
			REPEAT(1, RANGE('0', '9'))
		)
	);
	
	DEFINE("Float",
		GLUE(
			CHOICE(
				GLUE(
					REPEAT(1, RANGE('0', '9')),
					CHOICE(
						AHEAD(RANGE("eE")),
						GLUE(
							CHAR('.'),
							REPEAT(RANGE('0', '9'))
						)
					)
				),
				GLUE(
					REPEAT(RANGE('0', '9')),
					CHAR('.'),
					REPEAT(1, RANGE('0', '9'))
				)
			),
			REPEAT(0, 1,
				GLUE(
					RANGE("eE"),
					REPEAT(0, 1, RANGE("+-")),
					REPEAT(1, RANGE('0', '9'))
				)
			),
			NOT(CHAR('.')) // to distinguish from op '...'
		)
	);
	
	DEFINE("EscapedChar",
		GLUE(
			CHAR('\\'),
			CHOICE(
				RANGE("'\"\\bfnrtv\n"),
				GLUE(
					CHAR('0'),
					NOT(RANGE('0', '9'))
				),
				GLUE(
					CHAR('x'),
					REPEAT(2, 2, INLINE("HexDigit"))
				),
				GLUE(
					CHAR('u'),
					REPEAT(4, 4, INLINE("HexDigit"))
				)
			)
		)
	);
	
	DEFINE("String",
		GLUE(
			AHEAD(RANGE("\"'")),
			GETCHAR("quotation"),
			REPEAT(
				CHOICE(
					REF("EscapedChar"),
					GLUE(
						NOT(CHAR('\n')),
						VAROTHER("quotation")
					)
				)
			),
			VARCHAR("quotation")
		)
	);
	
	DEFINE("AnyEscapedChar",
		GLUE(
			CHAR('\\'),
			OTHER('\n')
		)
	);
	
	DEFINE("RegExp",
		GLUE(
			STRING("~/"),
			REPEAT(
				CHOICE(
					EXCEPT("\n/\\"),
					REF("AnyEscapedChar")
				)
			),
			CHAR('/'),
			REPEAT(0, 4, RANGE("igms"))
		)
	);
	
	DEFINE("HaxeSource",
		REPEAT(
			FIND(
				CHOICE(
					REPEAT(1, RANGE(" \t\r")),
					REF("Comment"),
					REF("String"),
					REF("RegExp"),
					REF("Macro"),
					REF("Keyword"),
					REF("Class"),
					REF("Identifier"),
					REF("Operator"),
					REF("Float"),
					REF("Integer"),
					REF("Boolean")
				)
			)
		)
	);
	
	ENTRY("HaxeSource");
}
