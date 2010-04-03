// Railscasts v0.1.1
// This theme is generated by a converter script.
// Original Textmate Theme: "Railscasts" copyright by Ryan Bates (see Railscasts.copying).
// The conversion is still incomplete. Any suggestions or any problems,
// please contact me at yanyu [at] cyblogic [dot] com.
// More at http://github.com/yanyu/textmate-themes

RCEditorFG = '#E6E1DC';
RCEditorBG = '#323232';
RCEditorCursor = '#fff';
RCEditorSelection = '#555d74';
RCEditorMatch = '#787878';
RCEditorBracketMatch = RCEditorMatch;
RCEditorCurrentLine = '#333435';
RCComment = '#BC9458';
RCBlockComment = '#BC9458';
RCHtmlComment = '#BC9458';
RCStringLiteral = '#A5C261';
RCRegularExpression = '#A5C261';
RCInterpolation = '#519F50';
RCRubyInterpolation = '#519F50';
RCDocument = '#A5C261';
RCBoolean = '#A5C261';
RCNumber = '#A5C261';
RCRubyNumber = '#A5C261';
RCInteger = '#A5C261';
RCFloat = '#A5C261';
RCFunction = '#FFC66D';
RCKeyword = '#CC7833';
RCJavascriptKeyword = '#CC7833';
RCObjcKeyword = '#FFC66D';
RCPreprocessing = '#519F50';
RCRubyClassName = '#E6E1DC';
RCConstantName = '#DA4939';
RCBuiltinConstant = '#6E9CBE';
RCCharacterConstant = '#A5C261';
RCEscape = '#519F50';
RCBlock = '#E6E1DC';
RCSymbol = '#6D9CBE';
RCVariable = '#D0D0FF';
RCRubyVariable = '#D0D0FF';
RCRubyInstanceVariable = '#D0D0FF';
RCRubyClassVariable = '#D0D0FF';
RCRubyGlobalVariable = '#D0D0FF';
RCPunctuator = '#FFFFFF';
RCOperator = '#CC7833';
RCCommand = { color: '#E6E1DC', bold: true }
RCArrayBracket = '#E6E1DC';
RCTagName = '#E8BF6A';
RCTagOpen = '#E8BF6A';
RCTagClose = '#E8BF6A';
RCTagOther = '#E8BF6A';
RCTagAttribute = '#E8BF6A';
RCTagValue = '#E8BF6A';
RCErbTag = '#E6E1DC';
RCCssTag = '#E8BF6A';
RCCssId = '#E6E1DC';
RCCssClass = '#E6E1DC';
RCCssPseudoClass = '#E6E1DC';
RCCssProperty = '#E6E1DC';
RCCssValue = '#E6E1DC';
RCCssUnit = '#A5C261';
RCCssRule = '#E6E1DC';


charcoal.themes["Railscasts"] =
{
	displayName: "Railscasts",

	layers: {
		"ruby": {
			"Comment": RCComment,
			"BlockComment": RCBlockComment,
			"Block": RCBlock,
			"Interpolation": RCInterpolation,
			"String": RCStringLiteral,
			"Document": RCDocument,
			"Keyword": RCKeyword,
			"DeclarationKeyword": RCKeyword,
			"Builtin": RCBuiltinConstant,
			"LocalName": RCRubyVariable,
			"MemberName": RCRubyInstanceVariable,
			"ClassMemberName": RCRubyClassVariable,
			"ClassName": RCRubyClassName,
			"ConstantName": RCConstantName,
			"GlobalName": RCRubyGlobalVariable,
			"Symbol": RCSymbol,
			"OpeningBracket": RCArrayBracket,
			"ClosingBracket": RCArrayBracket,
			"Float": RCFloat,
			"Integer": RCInteger,
			"Operator": RCOperator,
			"EscapeSequence": RCEscape
		},
		"python": {
			"Comment": RCComment,
			"String": RCStringLiteral,
			"Keyword": RCKeyword,
			"Identifier": RCKeyword,
			"Operator": RCOperator,
			"Float": RCFloat,
			"Integer": RCInteger
		},
		"javascript": {
			"Comment": RCComment,
			"Keyword": RCJavascriptKeyword,
			"ReservedWord": RCJavascriptKeyword,
			"FutureReservedWord": RCJavascriptKeyword,
			"Identifier": RCOperator,
			"DecimalLiteral": RCNumber,
			"HexIntegerLiteral": RCNumber,
			"StringLiteral": RCStringLiteral,
			"EscapeSequence": RCEscape,
			"BackslashSequence": RCEscape,
			"RegularExpressionLiteral": RCRegularExpression,
			"Punctuator" : RCPunctuator,
			"DivPunctuator" : RCPunctuator
		},
		"haxe": {
			"Comment": RCComment,
			"String": RCStringLiteral,
			"RegExp": RCRegularExpression,
			"EscapedChar": RCEscape,
			"AnyEscapedChar": RCEscape,
			"Macro": RCPreprocessing,
			"Keyword": RCKeyword,
			"Class": RCRubyClassName,
			"Identifier": RCVariable,
			"Operator": RCOperator,
			"Float": RCFloat,
			"Integer": RCInteger
		},
		"css": {
			"Comment": RCComment,
			"Property": RCCssProperty,
			"UnknownProperty": RCCssProperty,
			"Value": RCCssValue,
			"Unit": RCCssUnit,
			"Tag": RCCssTag,
			"Class": RCCssClass,
			"PseudoClass": RCCssPseudoClass,
			"Id": RCCssId,
			"Rule": RCCssRule
		},
		"xml": {
			"Comment": RCHtmlComment,
			"TagName": RCTagName,
			"TagOpen": RCTagOpen,
			"TagClose": RCTagClose,
			"AttributeName": RCTagAttribute,
			"AttributeValue": RCTagValue,
			"ScriptTagName": RCTagOther
		},
		"erb": {
			"ErbComment": RCComment,
			"ErbStart": RCErbTag,
			"ErbEnd": RCErbTag
		},
		"cxx": {
			"BlockComment": RCBlockComment,
			"LineComment": RCComment,
			"PreprocessingComment": RCBlockComment,
			"Preprocessing": RCPreprocessing,
			"EscapedChar": RCEscape,
			"String": RCStringLiteral,
			"ObjcEscapedChar": RCEscape,
			"ObjcString": RCStringLiteral,
			"Keyword": RCKeyword,
			"TypeKeyword": RCObjcKeyword,
			"QtKeyword": RCKeyword,
			"ObjcKeyword": RCObjcKeyword,
			"Integer": RCInteger,
			"Float": RCFloat,
			"Char": RCCharacterConstant,
			"Punctuator" : RCPunctuator
		},
		"dao": {
			"BlockComment": RCBlockComment,
			"LineComment": RCComment,
			"EscapedChar": RCEscape,
			"String": RCStringLiteral,
			"Keyword": RCKeyword,
			"CoreTypes": RCObjcKeyword,
			"Builtin": RCBuiltinConstant,
			"Integer": RCInteger,
			"Float": RCFloat,
			"Char": RCCharacterConstant
		},
		"bash": {
			"Comment": RCComment,
			"SingleQuoted": RCStringLiteral,
			"DoubleQuoted": RCStringLiteral,
			"Document": RCDocument,
			"EscapedChar": RCEscape,
			"Expansion": RCInterpolation,
			"Operator": RCOperator,
			"Builtin": RCBuiltinConstant,
			"Reserved": RCKeyword,
			"Integer": RCInteger
		},
		"cmake": {
			"Comment": RCComment,
			"Command": RCCommand,
			"Function": RCFunction,
			"Expansion": RCInterpolation,
			"String": RCStringLiteral,
			"Version": RCFloat,
			"Boolean": RCBoolean,
			"Number": RCNumber
		},
		"sql": {
			"Comment": RCComment,
			"String": RCStringLiteral,
			"EscapeSequence": RCEscape,
			"Number": RCNumber
		}
	},
	
	editor: {
		foreground: RCEditorFG,
		background: RCEditorBG,
		cursor: RCEditorCursor,
		lineNumbers: "#808080",
		lineNumbersBright: "#000",
		lineNumbersBackground: "#F2F2F2",
		lineNumbersBackgroundBright: "#E5E5E5",
		selection: RCEditorSelection,
		match: RCEditorMatch,
		bracketMatch: RCEditorBracketMatch,
		currentLine: RCEditorCurrentLine
	}
};
