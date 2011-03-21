charcoal.syntax["javascript"] = function()
{
	DEFINE_VOID("Whitespace",
		RANGE(" \t\n\r")
	);
	
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
	
	DEFINE("Comment",
		CHOICE(
			REF("BlockComment"),
			REF("LineComment")
		)
	);
	
	DEFINE("Keyword",
		KEYWORD(
			"break    else       new    var   \
			 case     finally    return void  \
			 catch    for        switch while \
			 continue function   this   with  \
			 default  if         throw        \
			 delete   in         try          \
			 do       instanceof typeof       "
		)
	);
	
	DEFINE("FutureReservedWord",
		KEYWORD(
			"abstract enum       int       short        \
			 boolean  export     interface static       \
			 byte     extends    long      super        \
			 char     final      native    synchronized \
			 class    float      package   throws       \
			 const    goto       private   transient    \
			 debugger implements protected volatile     \
			 double   import     public                 "
		)
	);
	
	DEFINE("Punctuator",
		KEYWORD(
			"{   }    (   )   [   ]   \
			 .   ;    ,   <   >   <=  \
			 >=  ==   !=  === !==     \
			 +   -    *   %   ++  --  \
			 <<  >>   >>> &   |   ^   \
			 !   ~    &&  ||  ?   :   \
			 =   +=   -=  *=  %=  <<= \
			 >>= >>>= &=  |=  ^=      "
		)
	);
	
	DEFINE("DivPunctuator",
		GLUE(
			NOT(
				CHOICE(
					PREVIOUS("Punctuator"),
					PREVIOUS("DivPunctuator")
				)
			),
			KEYWORD(
				"/   /="
			)
		)
	);
	
	DEFINE("NullLiteral",
		KEYWORD("null")
	);
	
	DEFINE("BooleanLiteral",
		KEYWORD("true false")
	);
	
	DEFINE("HexDigit",
		CHOICE(
			RANGE('0', '9'),
			RANGE('a', 'f'),
			RANGE('A', 'F')
		)
	);
	
	DEFINE("EscapeSequence",
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
	
	DEFINE("StringLiteral",
		CHOICE(
			GLUE(
				CHAR('"'),
				REPEAT(
					CHOICE(
						REF("EscapeSequence"),
						EXCEPT("\"\n")
					)
				),
				CHAR('"')
			),
			GLUE(
				CHAR('\''),
				REPEAT(
					CHOICE(
						REF("EscapeSequence"),
						EXCEPT("\'\n")
					)
				),
				CHAR('\'')
			)
		)
	);
	
	DEFINE("DecimalLiteral",
		GLUE(
			CHOICE(
				GLUE(
					REPEAT(1, RANGE('0', '9')),
					REPEAT(0, 1, CHAR('.')),
					REPEAT(RANGE('0', '9'))
				),
				GLUE(
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
	
	DEFINE("HexIntegerLiteral",
		GLUE(
			CHAR('0'),
			RANGE("xX"),
			REPEAT(1, INLINE("HexDigit"))
		)
	);
	
	DEFINE("NumericLiteral",
		CHOICE(
			REF("HexIntegerLiteral"),
			REF("DecimalLiteral")
		)
	);
	
	DEFINE("BackslashSequence",
		GLUE(
			CHAR('\\'),
			OTHER('\n')
		)
	);
	
	DEFINE("RegularExpressionLiteral",
		GLUE(
			CHAR('/'),
			EXCEPT("\n*/\\"),
			REPEAT(
				CHOICE(
					EXCEPT("\n/\\"),
					REF("BackslashSequence")
				)
			),
			CHAR('/'),
			REPEAT(0, 4, RANGE("gimy"))
		)
	);
	
	DEFINE("Identifier",
		GLUE(
			NOT(
				INLINE("ReservedWord")
			),
			CHOICE(
				REF("Key"),
				REF("MemberName"),
				REF("ClassName")
			)
		)
	);
	
	DEFINE("ReservedWord",
		GLUE(
			CHOICE(
				REF("Keyword"),
				REF("FutureReservedWord"),
				REF("NullLiteral"),
				REF("BooleanLiteral")
			),
			NOT(
				CHOICE(
					RANGE('a', 'z'),
					RANGE('A', 'Z'),
					CHAR('_'),
					RANGE('0', '9')
				)
			)
		)
	);
	
	DEFINE("MemberName",
		GLUE(
			RANGE('a', 'z'),
			REPEAT(
				CHOICE(
					RANGE('a', 'z'),
					RANGE('A', 'Z'),
					RANGE('0', '9'),
					CHAR('_$')
				)
			)
		)
	);
	
	DEFINE("ClassName",
		GLUE(
			RANGE('A', 'Z'),
			REPEAT(
				CHOICE(
					RANGE('a', 'z'),
					RANGE('A', 'Z'),
					RANGE('0', '9'),
					CHAR('_$')
				)
			)
		)
	);
	
	DEFINE("Key",
		GLUE(
			REF("MemberName"),
			REPEAT(
				GLUE(
					CHAR('.'),
					REF("MemberName")
				)
			),
			AHEAD(
				GLUE(
					REPEAT(INLINE("Whitespace")),
					CHAR(':')
				)
			)
		)
	);
	
	DEFINE("JavascriptSource",
		REPEAT(
			FIND(
				CHOICE(
					REPEAT(1, RANGE(" \t\r")),
					REF("Comment"),
					REF("ReservedWord"),
					REF("Identifier"),
					REF("NumericLiteral"),
					REF("Punctuator"),
					REF("DivPunctuator"),
					REF("RegularExpressionLiteral"),
					REF("StringLiteral")
				)
			)
		)
	);
	
	ENTRY("JavascriptSource");
}
