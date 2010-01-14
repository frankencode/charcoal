white       = "#ffffff";
black       = "#000000";
red         = "#ff0000";
darkRed     = "#800000";
green       = "#00ff00";
darkGreen   = "#008000";
blue        = "#0000ff";
darkBlue    = "#000080";
cyan        = "#00ffff";
darkCyan    = "#008080";
magenta     = "#ff00ff";
darkMagenta = "#800080";
yellow      = "#ffff00";
darkYellow  = "#808000";
gray        = "#a0a0a4";
darkGray    = "#808080";
lightGray   = "#c0c0c0";

charcoal.themes["Default"] =
{
	displayName: "Default",
	
	layers: {
		"ruby": {
			"Comment": darkGray,
			"BlockComment": darkGray,
			"Keyword": { color: black, bold: true },
			"DeclarationKeyword": { color: black, bold: true },
			"Builtin": darkBlue,
			"String": darkGreen,
			"EscapeSequence": darkYellow,
			"Interpolation": darkMagenta,
			"Block": black,
			"Document": darkGreen,
			"Integer": blue,
			"Float": magenta,
			"Symbol": darkCyan
		},
		"python": {
			"Comment": darkGray,
			"String": darkGreen,
			"Keyword": { color: black, bold: true },
			"Identifier": black,
			"Operator": black,
			"Float": magenta,
			"Integer": blue
		},
		"javascript": {
			"Comment": darkGray,
			"ReservedWord": { color: black, bold: true },
			"DecimalLiteral": blue,
			"HexIntegerLiteral": magenta,
			"StringLiteral": darkGreen,
			"EscapeSequence": darkYellow,
			"BackslashSequence": darkYellow,
			"RegularExpressionLiteral": darkMagenta
		},
		"xml": {
			"Comment": darkGray,
			"TagName": { color: black, bold: true },
			"TagOpen": { color: black, bold: true },
			"TagClose": { color: black, bold: true },
			"AttributeName": darkBlue,
			"AttributeValue": darkGreen,
			"ScriptTagName": { color: black, bold: true }
		},
		"erb": {
			"ErbComment": darkGray,
			"ErbStart": { color: darkMagenta, bold: true },
			"ErbEnd": { color: darkMagenta, bold: true }
		},
		"cxx": {
			"BlockComment": darkGray,
			"LineComment": darkGray,
			"PreprocessingComment": darkGray,
			"Preprocessing": darkGreen,
			"EscapedChar": magenta,
			"String": red,
			"ObjcEscapedChar": magenta,
			"ObjcString": red,
			"Keyword": { color: black, bold: true },
			"TypeKeyword": darkRed,
			"QtKeyword": { color: blue, bold: true },
			"ObjcKeyword": { color: blue, bold: true },
			"Integer": blue,
			"Float": darkMagenta,
			"Char": magenta
		},
		"bash": {
			"Comment": darkGray,
			"SingleQuoted": darkGreen,
			"DoubleQuoted": darkGreen,
			"Document": darkGreen,
			"EscapedChar": darkYellow,
			"Expansion": darkMagenta,
			"Operator": black,
			"Builtin": darkBlue,
			"Reserved": { color: black, bold: true },
			"Integer": blue
		}
	},
	
	editor: {
		foreground: "#000",
		background: "#FFF",
		cursor: "#000",
		lineNumbers: "#808080",
		lineNumbersBright: "#000",
		lineNumbersBackground: "#F2F2F2",
		lineNumbersBackgroundBright: "#E5E5E5",
		selection: "#CCE5FF",
		match: "#FF6",
		bracketMatch: "#FFFF4C",
		currentLine: "#F2F2F2"
	}
};
