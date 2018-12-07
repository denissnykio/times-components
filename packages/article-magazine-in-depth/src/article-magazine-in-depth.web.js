import React, { Component, Fragment } from "react";
import ArticleSkeleton from "@times-components/article-skeleton";
import { getHeadline, getLeadAsset } from "@times-components/utils";
import Meta from "./article-meta/article-meta";
import ArticleHeader from "./article-header/article-header";
import LeadAsset from "./article-lead-asset/article-lead-asset";
import {
  articlePropTypes,
  articleDefaultProps
} from "./article-prop-types/article-prop-types";
import styles from "./styles";
import { HeaderContainer } from "./styles/responsive";

class ArticlePage extends Component {
  constructor(props) {
    super(props);
    this.renderHeader = this.renderHeader.bind(this);
  }

  renderHeader({ width }) {
    const { article } = this.props;
    const leadAssetProps = getLeadAsset(article);
    const {
      byline,
      flags,
      headline,
      label,
      publicationName,
      publishedTime,
      shortHeadline,
      standfirst
    } = article;

    return (
      <Fragment>
        <ArticleHeader
          flags={flags}
          headline={getHeadline(headline, shortHeadline)}
          label={label}
          standfirst={standfirst}
        />
        <LeadAsset {...leadAssetProps} width={width} />
        <HeaderContainer style={styles.metaContainer}>
          <Meta
            byline={byline}
            publicationName={publicationName}
            publishedTime={publishedTime}
          />
        </HeaderContainer>
      </Fragment>
    );
  }

  render() {
    const {
      adConfig,
      article,
      analyticsStream,
      error,
      isLoading,
      receiveChildList
    } = this.props;

    if (error || isLoading) {
      return null;
    }

    return (
      <ArticleSkeleton
        adConfig={adConfig}
        analyticsStream={analyticsStream}
        data={article}
        Header={this.renderHeader}
        receiveChildList={receiveChildList}
      />
    );
  }
}

ArticlePage.propTypes = articlePropTypes;
ArticlePage.defaultProps = articleDefaultProps;

export default ArticlePage;
