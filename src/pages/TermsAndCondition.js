import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material'
import React from 'react'
import MainHeader from '../containers/Header/MainHeader'
import NavigationLayout from '../containers/NavigationLayout'
import WebHeader from '../containers/Header/WebHeader'
import UITypogrpahy from '../components/UITypography/UITypogrpahy'
import { UIPolicyTypography } from '../components/UITypography/ui'
import AdjustIcon from '@mui/icons-material/Adjust'

const TermsAndCondition = () => {
  return (
    <NavigationLayout>
      <Box sx={{ display: { xs: 'block', md: 'none' } }} px={2}>
        <MainHeader heading="Terms & Conditions" />
      </Box>
      <Container
        maxWidth="lg"
        sx={{ padding: { xs: '10px 0px 40px 20px', md: '10px 0px 40px 0px' } }}
      >
        <Box sx={{}}>
          <Grid container sx={{ display: { xs: 'none', md: 'block' } }}>
            <WebHeader heading="Terms & Conditions" isDivider={true} />
          </Grid>
        </Box>
        <Grid container>
          <Grid item xs={12}>
            <UIPolicyTypography>
              <b>Products</b> refer to the products or items offered for sale on
              the Service.
            </UIPolicyTypography>
            <UIPolicyTypography mt={1}>
              <b>Orders</b> mean a request by You to purchase Products from Us
            </UIPolicyTypography>
            <UIPolicyTypography mt={1}>
              <b>Promotions</b> refer to contests, sweepstakes or other
              promotions offered through the Service.
            </UIPolicyTypography>
            <UIPolicyTypography mt={1}>
              <b>Service</b> refers to the Web Application and provider services
              (grooming).
            </UIPolicyTypography>
            <UIPolicyTypography mt={1}>
              <b>Terms and Conditions</b> (also referred as "Terms" or "Terms of
              Use") mean these Terms and Conditions that form the entire
              agreement between You and the Company regarding the use of the
              Service
            </UIPolicyTypography>
          </Grid>
          <Grid item xs={12} mt={6}>
            <UIPolicyTypography fontWeight={600}>
              Terms of Conditions
            </UIPolicyTypography>
            <UIPolicyTypography mt={4}>
              These are the Terms and Conditions governing the use of this
              Service and the agreement that operates between You and the
              Company. These Terms and Conditions set out the rights and
              obligations of all users regarding the use of the Service{' '}
            </UIPolicyTypography>
            <UIPolicyTypography mt={2}>
              Your access to and use of the Service is conditioned on Your
              acceptance of and compliance with these Terms and Conditions.
              These Terms and Conditions apply to all visitors, users and others
              who access or use the Service.
            </UIPolicyTypography>
            <UIPolicyTypography mt={2}>
              By accessing or using the Service You agree to be bound by these
              Terms and Conditions. If You disagree with any part of these Terms
              and Conditions then You may not access the Service.
            </UIPolicyTypography>
            <UIPolicyTypography mt={2}>
              You represent that you are over the age of 18. The Company does
              not permit those under 18 to use the Service.
            </UIPolicyTypography>
            <UIPolicyTypography mt={2}>
              Your access to and use of the Service is also conditioned on Your
              acceptance of and compliance with the Privacy Policy of the
              Company. Our Privacy Policy describes Our policies and procedures
              on the collection, use and disclosure of Your personal information
              when You use the Application or the Website and tells You about
              Your privacy rights and how the law protects You. Please read Our
              Privacy Policy carefully before using Our Service.
            </UIPolicyTypography>
            <UIPolicyTypography fontWeight={600} mt={6}>
              Order for Products & Services{' '}
            </UIPolicyTypography>
            <UIPolicyTypography mt={2}>
              If You wish to place an Order for Products & Service available on
              the website application, You may be asked to supply certain
              information relevant to Your Order including, without limitation,
              Your name, Your email, Your phone number, Your credit card number,
              the expiration date of Your credit card, Your billing address, and
              Your shipping information.
            </UIPolicyTypography>
            <UIPolicyTypography mt={2}>
              You represent and warrant that: (i) You have the legal right to
              use any credit or debit card(s) or other payment method(s) in
              connection with any Order; and that (ii) the information You
              supply to us is true, correct and complete.
            </UIPolicyTypography>
            <UIPolicyTypography mt={2}>
              By submitting such information, You grant us the right to provide
              the information to payment processing third parties for purposes
              of facilitating the completion of Your Order.
            </UIPolicyTypography>
            <UIPolicyTypography fontWeight={600} mt={4}>
              Request for Services{' '}
            </UIPolicyTypography>
            <UIPolicyTypography mt={2}>
              By placing request for services, You warrant that You are legally
              capable of entering into binding agreements, including
              subscriptions if applicable.
            </UIPolicyTypography>
            <UIPolicyTypography fontWeight={600} mt={4}>
              Prices Policy{' '}
            </UIPolicyTypography>
            <UIPolicyTypography mt={2}>
              The Company reserves the right to revise its (prices or
              subscriptions if applicable) at any time prior to accepting any
              service or relevant order.
            </UIPolicyTypography>
            <UIPolicyTypography mt={2}>
              The prices quoted may be revised by the Company subsequent to
              accepting any booking made by the customer in the event of any
              occurrence affecting delivery caused by government action,
              variation in customs duties, increased shipping charges, higher
              foreign exchange costs and any other matter beyond the control of
              the Company.
            </UIPolicyTypography>
            <UIPolicyTypography fontWeight={600} mt={4}>
              Payments{' '}
            </UIPolicyTypography>
            <UIPolicyTypography mt={2}>
              Payment can be made through various payment methods we have
              available, such as Visa, MasterCard, Affinity Card, American
              Express cards or online payment methods (PayPal, for example).
            </UIPolicyTypography>
            <UIPolicyTypography mt={2}>
              Payment cards (credit cards or debit cards) are subject to
              validation checks and authorization by Your card issuer. If we do
              not receive the required authorization, We will not be liable for
              any delay or non-delivery of Your Order.
            </UIPolicyTypography>
            <UIPolicyTypography fontWeight={600} mt={4}>
              Service or Product Cancellation by Company{' '}
            </UIPolicyTypography>
            <UIPolicyTypography mt={2}>
              We reserve the right to refuse or cancel your Service or Product
              at any time for certain reasons including but not limited to:
            </UIPolicyTypography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <AdjustIcon
                    sx={{
                      color: (theme) => theme.palette.primary.main,
                      fontSize: '15px',
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <UIPolicyTypography>
                      Service or Product availability
                    </UIPolicyTypography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AdjustIcon
                    sx={{
                      color: (theme) => theme.palette.primary.main,
                      fontSize: '15px',
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <UIPolicyTypography>
                      Errors in the description or prices for Services or
                      Products
                    </UIPolicyTypography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AdjustIcon
                    sx={{
                      color: (theme) => theme.palette.primary.main,
                      fontSize: '15px',
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <UIPolicyTypography>
                      Errors in Your Service or Product
                    </UIPolicyTypography>
                  }
                />
              </ListItem>
            </List>
            <UIPolicyTypography mt={2}>
              We reserve the right to refuse or cancel Your Order if fraud or an
              unauthorized or illegal transaction is suspected
            </UIPolicyTypography>
            <UIPolicyTypography fontWeight={600} mt={4}>
              Service or Product Cancellations by Client
            </UIPolicyTypography>
            <UIPolicyTypography
              fontWeight={600}
              sx={{ textDecoration: 'underline' }}
              mt={2}
            >
              Non Subscribers:{' '}
            </UIPolicyTypography>
            <UIPolicyTypography mt={2}>
              Once a service has been “Requested” by the client and “Accepted”
              by the provider, there will be no option to edit, remove, or
              cancel the service less than 24hr notice in which case the full
              deposit amount will be non-refundable.
            </UIPolicyTypography>
            <UIPolicyTypography
              fontWeight={600}
              sx={{ textDecoration: 'underline' }}
              mt={4}
            >
              Subscribers:{' '}
            </UIPolicyTypography>
            <UIPolicyTypography mt={2}>
              Any cancellations or no-shows with less than 24hr notice for all
              subscribers will receive a $20 fee applied and debited to their
              account
            </UIPolicyTypography>
            <UIPolicyTypography mt={2}>
              Any Services or Products you purchase can only be cancelled and
              subsequently refunded (if applicable) in accordance with these
              Terms and Conditions
            </UIPolicyTypography>
            <UIPolicyTypography fontWeight={600} mt={4}>
              Promotions
            </UIPolicyTypography>
            <UIPolicyTypography mt={2}>
              Any Promotions made available through the Service may be governed
              by rules that are separate from these Terms.
            </UIPolicyTypography>
            <UIPolicyTypography mt={2}>
              If You participate in any Promotions, please review the applicable
              rules as well as our Privacy policy. If the rules for a Promotion
              conflict with these Terms, the Promotion rules will apply
            </UIPolicyTypography>
          </Grid>
        </Grid>
      </Container>
    </NavigationLayout>
  )
}

export default TermsAndCondition
