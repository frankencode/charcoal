// Ruby Blue v0.1.1
// This theme is generated by a converter script.
// Original Textmate Theme: "Ruby Blue" copyright by John W. Long (see RubyBlue.copying).
// The conversion is still incomplete. Any suggestions or any problems,
// please contact me at yanyu [at] cyblogic [dot] com.
// More at http://github.com/yanyu/rubyblue

RBEditorFG = '#FFFFFF';
RBEditorBG = '#121E31';
RBEditorCursor = '#fff';
RBEditorSelection = '#38566F';
RBEditorMatch = '#787878';
RBEditorBracketMatch = RBEditorMatch;
RBEditorCurrentLine = '#253E5A';
RBInvalid = '#FFFFFF';
RBComment = '#428BDD';
RBBlockComment = '#438AD7';
RBHtmlComment = '#428BDD';
RBStringLiteral = '#E2CE00';
RBRegularExpression = '#CA4344';
RBInterpolation = '#468434';
RBRubyInterpolation = '#468434';
RBDocument = '#1DC116';
RBBoolean = '#1DC116';
RBNumber = '#EDDD3D';
RBRubyNumber = '#EDDD3D';
RBInteger = '#EDDD3D';
RBFloat = '#EDDD3D';
RBFunction = '#FFFFFF';
RBKeyword = '#F8BB00';
RBJavascriptKeyword = '#F8BB00';
RBObjcKeyword = '#F8BB00';
RBPreprocessing = '#468434';
RBClassName = '#FFFFFF';
RBRubyClassName = '#FFFFFF';
RBConstantName = '#8AA6C1';
RBBuiltinConstant = '#8AA6C1';
RBCharacterConstant = '#CA4344';
RBEscape = '#EDDD37';
RBBlock = '#FFFFFF';
RBSymbol = '#B53B3C';
RBVariable = '#FFFFFF';
RBRubyVariable = '#FFFFFF';
RBRubyInstanceVariable = '#FFFFFF';
RBRubyClassVariable = '#FFFFFF';
RBRubyGlobalVariable = '#FFFFFF';
RBPunctuator = '#FFFFFF';
RBOperator = '#8AA6C1';
RBCommand = { color: '#FFFFFF', bold: true }
RBArrayBracket = '#FFFFFF';
RBTagName = '#FFFFFF';
RBTagOpen = '#FFFFFF';
RBTagClose = '#FFFFFF';
RBTagOther = '#FFFFFF';
RBTagAttribute = '#FFFFFF';
RBTagValue = '#FFFFFF';
RBErbTag = '#FFFFFF';
RBCssTag = '#FFFFFF';
RBCssId = '#FFFFFF';
RBCssClass = '#FFFFFF';
RBCssPseudoClass = '#FFFFFF';
RBCssProperty = '#FFFFFF';
RBCssValue = '#FFFFFF';
RBCssUnit = '#EDDD3D';
RBAtRule = '#F8BB00';


charcoal.themes["Ruby Blue"] =
{
	displayName: "Ruby Blue",

	layers: {
		"ruby": {
			"Comment": RBComment,
			"BlockComment": RBBlockComment,
			"Block": RBBlock,
			"Interpolation": RBInterpolation,
			"String": RBStringLiteral,
			"Document": RBDocument,
			"Keyword": RBKeyword,
			"DeclarationKeyword": RBKeyword,
			"Builtin": RBBuiltinConstant,
			"MemberName": RBRubyInstanceVariable,
			"ClassMemberName": RBRubyClassVariable,
			"ClassName": RBRubyClassName,
			"ConstantName": RBConstantName,
			"GlobalName": RBRubyGlobalVariable,
			"Symbol": RBSymbol,
			"OpeningBracket": RBArrayBracket,
			"ClosingBracket": RBArrayBracket,
			"Float": RBFloat,
			"Integer": RBInteger,
			"Operator": RBOperator,
			"EscapeSequence": RBEscape
		},
		"python": {
			"Comment": RBComment,
			"String": RBStringLiteral,
			"Keyword": RBKeyword,
			"Operator": RBOperator,
			"Float": RBFloat,
			"Integer": RBInteger
		},
		"javascript": {
			"Comment": RBComment,
			"Keyword": RBJavascriptKeyword,
			"ReservedWord": RBJavascriptKeyword,
			"FutureReservedWord": RBJavascriptKeyword,
			"DecimalLiteral": RBNumber,
			"HexIntegerLiteral": RBNumber,
			"StringLiteral": RBStringLiteral,
			"EscapeSequence": RBEscape,
			"BackslashSequence": RBEscape,
			"RegularExpressionLiteral": RBRegularExpression,
			"Punctuator" : RBPunctuator,
			"DivPunctuator" : RBPunctuator
		},
		"as3": {
			"Comment": RBComment,
			"ReservedWord": RBJavascriptKeyword,
			"DecimalLiteral": RBNumber,
			"HexIntegerLiteral": RBNumber,
			"StringLiteral": RBStringLiteral,
			"EscapeSequence": RBEscape,
			"BackslashSequence": RBEscape,
			"RegularExpressionLiteral": RBRegularExpression
		},
		"haxe": {
			"Comment": RBComment,
			"String": RBStringLiteral,
			"RegExp": RBRegularExpression,
			"EscapedChar": RBEscape,
			"AnyEscapedChar": RBEscape,
			"Macro": RBPreprocessing,
			"Keyword": RBKeyword,
			"PackageIdentifier": RBClassName,
			"ClassIdentifier": RBClassName,
			"FunctionIdentifier": RBVariable,
			"VariableIdentifier": RBVariable,
			"EnumIdentifier": RBVariable,
			"BuiltInIdentifier": RBBuiltinConstant,
			"Operator": RBOperator,
			"Float": RBFloat,
			"Integer": RBInteger
		},
		"tex": {
			"Comment": RBComment,
			"Command": RBEscape,
			"Number": RBNumber,
			"Argument": RBVariable
		},
		"css": {
			"Comment": RBComment,
			"Property": RBCssProperty,
			"UnknownProperty": RBCssProperty,
			"Value": RBCssValue,
			"Unit": RBCssUnit,
			"Tag": RBCssTag,
			"Class": RBCssClass,
			"PseudoClass": RBCssPseudoClass,
			"Id": RBCssId,
			"Rule": RBAtRule
		},
		"xml": {
			"Comment": RBHtmlComment,
			"TagName": RBTagName,
			"TagOpen": RBTagOpen,
			"TagClose": RBTagClose,
			"AttributeName": RBTagAttribute,
			"AttributeValue": RBTagValue,
			"ScriptTagName": RBTagOther
		},
		"erb": {
			"ErbComment": RBComment,
			"ErbStart": RBErbTag,
			"ErbEnd": RBErbTag
		},
		"cucumber": {
			"Entity": RBKeyword,
			"FeatureKey": RBKeyword,
			"FeatureTitle": RBStringLiteral,
			"FeatureClause": RBStringLiteral,
			"ScenarioKey": RBKeyword,
			"ScenarioTitle": RBStringLiteral,
			"ScenarioClause": '#FFFFFF',
			"Citation": RBStringLiteral,
			"Tag": RBAtRule,
			"Comment": RBComment
		},
		"cxx": {
			"BlockComment": RBBlockComment,
			"LineComment": RBComment,
			"PreprocessingComment": RBBlockComment,
			"Preprocessing": RBPreprocessing,
			"EscapedChar": RBEscape,
			"String": RBStringLiteral,
			"ObjcEscapedChar": RBEscape,
			"ObjcString": RBStringLiteral,
			"Keyword": RBKeyword,
			"TypeKeyword": RBObjcKeyword,
			"QtKeyword": RBKeyword,
			"ObjcKeyword": RBObjcKeyword,
			"Integer": RBInteger,
			"Float": RBFloat,
			"Char": RBCharacterConstant,
			"Punctuator" : RBPunctuator
		},
		"dao": {
			"BlockComment": RBBlockComment,
			"LineComment": RBComment,
			"EscapedChar": RBEscape,
			"String": RBStringLiteral,
			"Keyword": RBKeyword,
			"CoreTypes": RBObjcKeyword,
			"Builtin": RBBuiltinConstant,
			"Integer": RBInteger,
			"Float": RBFloat,
			"Char": RBCharacterConstant
		},
		"bash": {
			"Comment": RBComment,
			"SingleQuoted": RBStringLiteral,
			"DoubleQuoted": RBStringLiteral,
			"Document": RBDocument,
			"EscapedChar": RBEscape,
			"Expansion": RBInterpolation,
			"Operator": RBOperator,
			"Builtin": RBBuiltinConstant,
			"Reserved": RBKeyword,
			"Integer": RBInteger
		},
		"cmake": {
			"Comment": RBComment,
			"Command": RBCommand,
			"Function": RBFunction,
			"Expansion": RBInterpolation,
			"String": RBStringLiteral,
			"Version": RBFloat,
			"Boolean": RBBoolean,
			"Number": RBNumber
		},
		"sql": {
			"Comment": RBComment,
			"String": RBStringLiteral,
			"EscapeSequence": RBEscape,
			"Number": RBNumber
		}
	},
	
	editor: {
		foreground: RBEditorFG,
		background: RBEditorBG,
		cursor: RBEditorCursor,
		lineNumbers: "#808080",
		lineNumbersBright: "#000",
		lineNumbersBackground: "#F2F2F2",
		// lineNumbersBackgroundBright: "#E5E5E5",
		selection: RBEditorSelection,
		match: RBEditorMatch,
		bracketMatch: RBEditorBracketMatch,
		currentLine: RBEditorCurrentLine
	}
};
