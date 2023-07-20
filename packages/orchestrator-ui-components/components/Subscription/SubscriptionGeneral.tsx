import React from 'react';

import {
    EuiFlexGrid,
    EuiFlexItem,
    EuiLoadingLogo,
    EuiSpacer,
} from '@elastic/eui';
import { SubscriptionContext } from '../../contexts/SubscriptionContext';
import { SubscriptionBlock } from './SubscriptionBlock';
import { FixedInputBlock } from './FixedInputBlock';

export const SubscriptionGeneral = () => {
    const { subscriptionData, loadingStatus } =
        React.useContext(SubscriptionContext);
    if (!loadingStatus) {
        return (
            <>
                <EuiSpacer size={'m'} />
                <EuiLoadingLogo />
            </>
        );
    }

    return (
        <EuiFlexGrid direction={'row'}>
            <>
                <EuiFlexItem>
                    {SubscriptionBlock(
                        'Subscription details',
                        subscriptionData,
                    )}
                </EuiFlexItem>
                <EuiFlexItem>
                    {FixedInputBlock(
                        'Fixed inputs',
                        subscriptionData.fixedInputs,
                    )}
                </EuiFlexItem>
                <EuiFlexItem>
                    {FixedInputBlock('Product info', subscriptionData.product)}
                </EuiFlexItem>
            </>
        </EuiFlexGrid>
    );
};
