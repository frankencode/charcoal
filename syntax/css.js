charcoal.syntax["css"] = function()
{
	OPTION("CaseSensitive", false);
	
	STATE_CHAR("quotationMark", '\0');
	
	DEFINE("Comment",
		GLUE(
			STRING("/*"),
			FIND(STRING("*/"))
		)
	);
	
	DEFINE("Integer",
		GLUE(
			CHOICE(
				GLUE(
					STRING("0x"),
					REPEAT(1,
						CHOICE(
							RANGE('0', '9'),
							RANGE('a', 'f'),
							RANGE('A', 'F')
						)
					)
				),
				GLUE(CHAR('0'), REPEAT(1, RANGE('0', '7'))),
				REPEAT(1, RANGE('0', '9'))
			),
			REPEAT(0, 1, RANGE("uU")),
			REPEAT(0, 2, RANGE("lL"))
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
			)
		)
	);
	
	DEFINE("Number",
		CHOICE(
			REF("Float"),
			REF("Integer")
		)
	);
	
	DEFINE("Property",
		KEYWORD(
			"azimuth \
			 background-attachment \
			 background-color \
			 background-image \
			 background-position \
			 background-repeat \
			 background \
			 border-collapse \
			 border-color \
			 border-spacing \
			 border-style \
			 border-top \
			 border-right \
			 border-bottom \
			 border-left \
			 border-top-color \
			 border-right-color \
			 border-bottom-color \
			 border-left-color \
			 border-top-style \
			 border-right-style \
			 border-bottom-style \
			 border-left-style \
			 border-top-width \
			 border-right-width \
			 border-bottom-width \
			 border-left-width \
			 border-width \
			 border \
			 bottom \
			 caption-side \
			 clear \
			 clip \
			 color \
			 content \
			 counter-increment \
			 counter-reset \
			 cue-after \
			 cue-before \
			 cue \
			 cursor \
			 direction \
			 display \
			 elevation \
			 empty-cells \
			 float \
			 font-family \
			 font-size \
			 font-style \
			 font-variant \
			 font-weight \
			 font \
			 height \
			 left \
			 letter-spacing \
			 line-height \
			 list-style-image \
			 list-style-position \
			 list-style-type \
			 list-style \
			 margin-right \
			 margin-left \
			 margin-top \
			 margin-bottom \
			 margin \
			 max-height \
			 max-width \
			 min-height \
			 min-width \
			 orphans \
			 outline-color \
			 outline-style \
			 outline-width \
			 outline \
			 overflow \
			 padding-top \
			 padding-right \
			 padding-bottom \
			 padding-left \
			 padding \
			 page-break-after \
			 page-break-before \
			 page-break-inside \
			 pause-after \
			 pause-before \
			 pause \
			 pitch-range \
			 pitch \
			 play-during \
			 position \
			 quotes \
			 richness \
			 right \
			 speak-header \
			 speak-numeral \
			 speak-punctuation \
			 speak \
			 speech-rate \
			 stress \
			 table-layout \
			 text-align \
			 text-decoration \
			 text-indent \
			 text-transform \
			 top \
			 unicode-bidi \
			 vertical-align \
			 visibility \
			 voice-family \
			 volume \
			 white-space \
			 widows \
			 width \
			 word-spacing \
			 z-index \
			 "
		)
	);
	
	DEFINE_VOID("Identifier",
		GLUE(
			CHOICE(
				RANGE('a', 'z'),
				RANGE('A', 'Z'),
				RANGE("_-")
			),
			REPEAT(
				CHOICE(
					RANGE('a', 'z'),
					RANGE('A', 'Z'),
					RANGE("_-"),
					RANGE('0', '9')
				)
			)
		)
	);
	
	DEFINE("UnknownProperty",
		INLINE("Identifier")
	);
	
	DEFINE("String",
		CHOICE(
			INLINE("Identifier"),
			GLUE(
				AHEAD(RANGE("\"'")),
				GETCHAR("quotationMark"),
				FIND(VARCHAR("quotationMark"))
			)
		)
	);
	
	DEFINE("Unit",
		KEYWORD(
			"em ex px cm mm in pt pc deg rad grad ms s hz khz"
		)
	);
	
	DEFINE("Value",
		CHOICE(
			GLUE(
				REPEAT(1,
					GLUE(
						CHOICE(
							REF("String"),
							REF("Number")
						),
						REPEAT(0, RANGE(" \t")),
						REPEAT(0, 1, REF("Unit")),
						REPEAT(0, RANGE(" \t")),
						REPEAT(0, 1, CHAR(',')),
						REPEAT(0, RANGE(" \t"))
					)
				),
				AHEAD(
					RANGE("\n;}")
				)
			),
			FIND(
				AHEAD(
					RANGE("\n;}")
				)
			)
		)
	);
	
	DEFINE("Block",
		GLUE(
			CHAR('{'),
			REPEAT(
				GLUE(
					NOT(CHAR('}')),
					CHOICE(
						REPEAT(1, RANGE(" \t\n\r\f")),
						REF("Comment"),
						GLUE(
							CHOICE(
								REF("Property"),
								REF("UnknownProperty")
							),
							REPEAT(0, 1,
								GLUE(
									REPEAT(0, RANGE(" \t")),
									CHAR(":"),
									REPEAT(0, RANGE(" \t")),
									REF("Value"),
									REPEAT(0, RANGE(" \t")),
									REPEAT(0, 1, CHAR(';'))
								)
							)
						),
						ANY()
					)
				)
			),
			CHAR('}')
		)
	);
	
	DEFINE("CssSource",
		REPEAT(
			FIND(
				CHOICE(
					REPEAT(1, RANGE(" \t\n\r\f")),
					REF("Comment"),
					REF("Block")
				)
			)
		)
	);
	
	ENTRY("CssSource");
}
