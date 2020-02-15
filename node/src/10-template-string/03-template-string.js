function tag(strings, ...values) {
  return strings.raw[0];
}

String.raw`Hi\n${2+3}!`; // "Hi\\n5!"