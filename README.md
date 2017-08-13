# react-loading-wrapper

A loading wrapper and supporting components for handling async loading actions

## Install

```
yarn add @salocreative/react-loading-wrapper
```

## Usage

```
import LoadingWrapper from '@salocreative/react-ui';
```

implement as follows

```
<LoadingWrapper
  display={ displayContent }
  loading={ product.meta.fetching }
  error={ product.meta.failed }
  errorMessage={ ErrorMessages.getProductFailed.message }
  retryAction={ () => this.attemptProductFetch() }
>

 Wrapped content dependant on Async content goes here

</LoadingWrapper>
```

The Loading wrapper is designed to wrap content that depends on an Async action (or multiple) resolving and improve the user experience. It can show a loading spinner while requests are processing and also error messages and even emit retry actions on failure. With this in mind the wrapper needs/accepts the following props:

- `display` : boolean value of whether the content in the wrapper should display or not. This should be based on the response of the Async action and passed in from a function as required. e.g. request complete and response has data ets
- `loading` boolean value determines whether the loading spinner should show
- `error` : boolean value that sets whether error should be displayed
- `errorMessage` : string value that sets the error message for the wrapper if the error flag is set to true
- `retryAction` : optional function that can be used to trigger further fetch attempts if the previous one has failed