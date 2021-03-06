import React from "react";
import { Text, View } from "react-native";
import PropTypes from "prop-types";
import Context from "@times-components/context";
import { fonts } from "@times-components/styleguide";

import Label from "../article-label/article-label";
import Flags from "../article-flags/article-flags";
import Meta from "../article-meta/article-meta";
import Standfirst from "../article-standfirst/article-standfirst";
import {
  articleHeaderPropTypes,
  articleHeaderDefaultProps
} from "./article-header-prop-types";
import styles from "../styles";

const ArticleHeader = ({
  byline,
  flags,
  headline,
  label,
  onAuthorPress,
  publicationName,
  publishedTime,
  standfirst
}) => (
  <Context.Consumer>
    {({ theme: { headlineFont } }) => (
      <View style={styles.container}>
        <Label label={label} />
        <Text
          style={[
            styles.articleHeadline,
            headlineFont ? { fontFamily: fonts[headlineFont] } : null
          ]}
        >
          {headline}
        </Text>
        <Flags flags={flags} />
        <Standfirst standfirst={standfirst} />
        <Meta
          byline={byline}
          onAuthorPress={onAuthorPress}
          publicationName={publicationName}
          publishedTime={publishedTime}
        />
      </View>
    )}
  </Context.Consumer>
);

ArticleHeader.propTypes = {
  ...articleHeaderPropTypes,
  onAuthorPress: PropTypes.func.isRequired
};

ArticleHeader.defaultProps = articleHeaderDefaultProps;

export default ArticleHeader;
