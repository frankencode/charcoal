// GitHub v0.1.1
// This theme is generated by a converter script.
// Original Textmate Theme: "GitHub" copyright by Martin Kühl (see GitHub.copying).
// A theme based on the GitHub code stylesheet.
// The conversion is still incomplete. Any suggestions or any problems,
// please contact me at yanyu [at] cyblogic [dot] com.
// More at http://github.com/yanyu/github.tmtheme

GHEditorFG = '#000000';
GHEditorBG = '#F8F8FF';
GHEditorCursor = '#000';
GHEditorSelection = '#FFFFAA';
GHEditorMatch = '#FF6';
GHEditorBracketMatch = GHEditorMatch;
GHEditorCurrentLine = '#FFFEEB';
GHInvalid = '#000000';
GHComment = '#999988';
GHBlockComment = '#999988';
GHHtmlComment = '#999988';
GHStringLiteral = '#DD1144';
GHRegularExpression = '#009926';
GHInterpolation = '#DD1144';
GHRubyInterpolation = '#DD1144';
GHDocument = '#DD1144';
GHBoolean = '#DD1144';
GHNumber = '#009999';
GHRubyNumber = '#009999';
GHInteger = '#009999';
GHFloat = '#009999';
GHFunction = '#990000';
GHKeyword = {color: '#000000', bold: true};
GHJavascriptKeyword = {color: '#000000', bold: true};
GHObjcKeyword = {color: '#000000', bold: true};
GHPreprocessing = '#DD1144';
GHModuleName = '#008080';
GHClassName = {color: '#445588', bold: true};
GHRubyClassName = {color: '#445588', bold: true};
GHConstantName = '#008080';
GHBuiltinConstant = {color: '#000000', bold: true};
GHCharacterConstant = '#DD1144';
GHEscape = '#DD1144';
GHBlock = {color: '#000000', bold: true};
GHSymbol = '#990073';
GHVariable = '#0086B3';
GHRubyVariable = '#0086B3';
GHRubyInstanceVariable = '#0086B3';
GHRubyClassVariable = '#0086B3';
GHRubyGlobalVariable = '#0086B3';
GHPunctuator = '#666666';
GHOperator = {color: '#000000', bold: true};
GHCommand = { color: '#000000', bold: true }
GHArrayBracket = {color: '#000000', bold: true};
GHTagName = '#000080';
GHTagOpen = '#000000';
GHTagClose = '#000000';
GHTagOther = '#000000';
GHTagAttribute = '#008080';
GHTagValue = '#000000';
GHErbTag = '#000000';
GHCssTag = '#000080';
GHCssId = '#000080';
GHCssClass = '#000080';
GHCssPseudoClass = '#000000';
GHCssProperty = '#000000';
GHCssValue = '#000000';
GHCssUnit = '#009999';
GHAtRule = {color: '#000000', bold: true};


charcoal.themes["GitHub"] =
{
	displayName: "GitHub",

	layers: {
		"ruby": {
			"Comment": GHComment,
			"BlockComment": GHBlockComment,
			"Block": GHBlock,
			"Interpolation": GHInterpolation,
			"String": GHStringLiteral,
			"Document": GHDocument,
			"Keyword": GHKeyword,
			"DeclarationKeyword": GHKeyword,
			"Builtin": GHBuiltinConstant,
			"ParentModuleName": GHModuleName,
			"ModuleName": GHModuleName,
			"MemberName": GHRubyInstanceVariable,
			"ClassMemberName": GHRubyClassVariable,
			"ConstantName": GHConstantName,
			"GlobalName": GHRubyGlobalVariable,
			"ClassDeclarationName": GHRubyClassName,
			"MethodDeclarationName": GHFunction,
			"ClassMethodDeclarationName": GHRubyClassName,
			"OperatorDeclarationName": GHFunction,
			"Symbol": GHSymbol,
			"Float": GHFloat,
			"Integer": GHInteger,
			"Operator": GHOperator,
			"EscapeSequence": GHEscape
		},
		"python": {
			"Comment": GHComment,
			"String": GHStringLiteral,
			"Keyword": GHKeyword,
			"Operator": GHOperator,
			"Float": GHFloat,
			"Integer": GHInteger
		},
		"javascript": {
			"Comment": GHComment,
			"Keyword": GHJavascriptKeyword,
			"ReservedWord": GHJavascriptKeyword,
			"FutureReservedWord": GHJavascriptKeyword,
			"DecimalLiteral": GHNumber,
			"HexIntegerLiteral": GHNumber,
			"StringLiteral": GHStringLiteral,
			"EscapeSequence": GHEscape,
			"BackslashSequence": GHEscape,
			"RegularExpressionLiteral": GHRegularExpression,
			"Punctuator" : GHPunctuator,
			"DivPunctuator" : GHPunctuator
		},
		"as3": {
			"Comment": GHComment,
			"ReservedWord": GHJavascriptKeyword,
			"DecimalLiteral": GHNumber,
			"HexIntegerLiteral": GHNumber,
			"StringLiteral": GHStringLiteral,
			"EscapeSequence": GHEscape,
			"BackslashSequence": GHEscape,
			"RegularExpressionLiteral": GHRegularExpression
		},
		"haxe": {
			"Comment": GHComment,
			"String": GHStringLiteral,
			"RegExp": GHRegularExpression,
			"EscapedChar": GHEscape,
			"AnyEscapedChar": GHEscape,
			"Macro": GHPreprocessing,
			"Keyword": GHKeyword,
			"PackageIdentifier": GHClassName,
			"ClassIdentifier": GHClassName,
			"FunctionIdentifier": GHVariable,
			"VariableIdentifier": GHVariable,
			"EnumIdentifier": GHVariable,
			"BuiltInIdentifier": GHBuiltinConstant,
			"Operator": GHOperator,
			"Float": GHFloat,
			"Integer": GHInteger
		},
		"tex": {
			"Comment": GHComment,
			"Command": GHEscape,
			"Number": GHNumber,
			"Argument": GHVariable
		},
		"css": {
			"Comment": GHComment,
			"Property": GHCssProperty,
			"UnknownProperty": GHCssProperty,
			"Value": GHCssValue,
			"Unit": GHCssUnit,
			"Tag": GHCssTag,
			"Class": GHCssClass,
			"PseudoClass": GHCssPseudoClass,
			"Id": GHCssId,
			"Rule": GHAtRule
		},
		"xml": {
			"Comment": GHHtmlComment,
			"TagName": GHTagName,
			"TagOpen": GHTagOpen,
			"TagClose": GHTagClose,
			"AttributeName": GHTagAttribute,
			"AttributeValue": GHTagValue,
			"ScriptTagName": GHTagOther
		},
		"erb": {
			"ErbComment": GHComment,
			"ErbStart": GHErbTag,
			"ErbEnd": GHErbTag
		},
		"cucumber": {
			"Entity": GHKeyword,
			"FeatureKey": GHKeyword,
			"FeatureTitle": GHStringLiteral,
			"FeatureClause": GHStringLiteral,
			"ScenarioKey": GHKeyword,
			"ScenarioTitle": GHStringLiteral,
			"ScenarioClause": '#000000',
			"Citation": GHStringLiteral,
			"Tag": GHAtRule,
			"Comment": GHComment
		},
		"cxx": {
			"BlockComment": GHBlockComment,
			"LineComment": GHComment,
			"PreprocessingComment": GHBlockComment,
			"Preprocessing": GHPreprocessing,
			"EscapedChar": GHEscape,
			"String": GHStringLiteral,
			"ObjcEscapedChar": GHEscape,
			"ObjcString": GHStringLiteral,
			"Keyword": GHKeyword,
			"TypeKeyword": GHObjcKeyword,
			"QtKeyword": GHKeyword,
			"ObjcKeyword": GHObjcKeyword,
			"Integer": GHInteger,
			"Float": GHFloat,
			"Char": GHCharacterConstant,
			"Punctuator" : GHPunctuator
		},
		"dao": {
			"BlockComment": GHBlockComment,
			"LineComment": GHComment,
			"EscapedChar": GHEscape,
			"String": GHStringLiteral,
			"Keyword": GHKeyword,
			"CoreTypes": GHObjcKeyword,
			"Builtin": GHBuiltinConstant,
			"Integer": GHInteger,
			"Float": GHFloat,
			"Char": GHCharacterConstant
		},
		"bash": {
			"Comment": GHComment,
			"SingleQuoted": GHStringLiteral,
			"DoubleQuoted": GHStringLiteral,
			"Document": GHDocument,
			"EscapedChar": GHEscape,
			"Expansion": GHInterpolation,
			"Operator": GHOperator,
			"Builtin": GHBuiltinConstant,
			"Reserved": GHKeyword,
			"Integer": GHInteger
		},
		"cmake": {
			"Comment": GHComment,
			"Command": GHCommand,
			"Function": GHFunction,
			"Expansion": GHInterpolation,
			"String": GHStringLiteral,
			"Version": GHFloat,
			"Boolean": GHBoolean,
			"Number": GHNumber
		},
		"sql": {
			"Comment": GHComment,
			"String": GHStringLiteral,
			"EscapeSequence": GHEscape,
			"Number": GHNumber
		},
		"pascal": {
			"Preprocessing": GHPreprocessing,
			"Comment": GHComment,
			"String": GHStringLiteral,
			"ControlString": GHEscape,
			"Integer": GHNumber,
			"Real": GHNumber,
			"Keyword": GHKeyword,
			"Modifier": GHKeyword, // special type declaration keywords
			"AddressOfIdentifier": GHInterpolation // color like Expansion in bash
			// "Identifier": ... // not to be highlighted, only exists for speed!
		},
		"octave": {
			"Comment": GHComment,
			"BuiltinAtomic": GHBuiltinConstant,
			"Builtin": GHBuiltinConstant,
			"ReservedWord": GHKeyword,
			"Integer": GHNumber,
			"Float": GHNumber,
			"SingleQuotedString": GHStringLiteral,
			"DoubleQuotedString": GHStringLiteral,
			"EscapeSequence": GHEscape,
			"EscapedSingleQuote": GHEscape,
			"Continuation": GHRegularExpression,
			"FunctionHandle": GHInterpolation, // color like Expansion in bash
			"Operator": GHOperator
			// "Identifier": ... // not to be highlighted, only exists for speed!
		}
	},
	
	editor: {
		foreground: GHEditorFG,
		background: GHEditorBG,
		cursor: GHEditorCursor,
		lineNumbers: "#808080",
		lineNumbersBright: "#000",
		lineNumbersBackground: "#F2F2F2",
		// lineNumbersBackgroundBright: "#E5E5E5",
		selection: GHEditorSelection,
		match: GHEditorMatch,
		bracketMatch: GHEditorBracketMatch,
		currentLine: GHEditorCurrentLine
	}
};
